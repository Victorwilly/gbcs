import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import Course from '../models/courseModel.js'
import Result from '../models/resultsModel.js'
import Announcement from '../models/announcementModal.js'
import Timetable from '../models/timeTable.js'
import Attendance from '../models/attendanceModel.js'
import Material from '../models/materialsModel.js'
import path from 'path';
import fs from'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, level, matriNumber, department, staffId } =
    req.body;

  // COMMON FIELDS FOR ALL USERS
  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Name, email, password and role are required");
  }

  // ROLE-BASED VALIDATION
  if (role === "student") {
    if (!level || !matriNumber || !department) {
      res.status(400);
      throw new Error("Students must have level, matric number and department");
    }
  }

  if (role === "lecturer") {
    if (!staffId) {
      res.status(400);
      throw new Error("Lecturers must have staff ID");
    }
  }

  if (role === "admin") {
    // Admin only needs name, email, password, role
    // (department, level, etc. are NOT required)
  }
  

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    level,
    matriNumber,
    staffId,
    department,
    role, 
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      level: user.level,
      matriNumber:user.matriNumber,
      staffId: user.staffId,
      department : user.department,
      role: user.role, // send role back in response too
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const updateProfileImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("No image file uploaded");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Build full URL
  const imagePath = `/uploads/${req.file.filename}`;
  const fullUrl = `${req.protocol}://${req.get("host")}${imagePath}`;

  user.profileImage = fullUrl;
  await user.save();

  res.status(200).json({
    message: "Profile image updated",
    profileImage: user.profileImage,
  });
});


// Login 
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      _id: user._id,
      role: user.role,
      email: user.email,
      token: token // This is the "key" your dashboard needs!
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get logged-in user (placeholder)
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)
    .populate("department", "departmentName");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

const getCourses = asyncHandler(async (req, res) => {
  const { level } = req.query;
  const records = await Course.find({ level });
  res.status(200).json(records);
});

const getMyCourses = asyncHandler(async (req, res) => {
  // 1. Get the user from the database to ensure we have the latest course array
  const user = await User.findById(req.user.id);

  if (!user || !user.courses || user.courses.length === 0) {
    return res.json([]);
  }

  // 2. Fetch all course documents whose _id is in the user's courses array
  const detailedCourses = await Course.find({
    '_id': { $in: user.courses }
  });

  res.json(detailedCourses);
});

const getResults = asyncHandler(async (req, res) => {
  // Use $ne (not equal) to exclude students
  const courses = await Result.find(); 
  
  res.status(200).json(courses);
});

const getMyResults = asyncHandler(async (req, res) => {
  const { semester } = req.query;

  if (!semester) {
    res.status(400);
    throw new Error("Please select a semester");
  }

  // 1. Find all results for this student in the chosen semester
  // .populate('courseId') is key here to get courseCode and courseUnit
  const studentResults = await Result.find({ 
    studentId: req.user._id, 
    semester: semester 
  }).populate({
    path: 'courseId',
    select: 'courseCode courseTitle courseUnit'
  });

  // 2. Format the data to match your frontend mapping
  const formattedResults = studentResults.map(result => ({
    _id: result._id,
    courseCode: result.courseId?.courseCode || "N/A",
    courseTitle: result.courseId?.courseTitle || "Unknown Course",
    courseUnit: result.courseId?.courseUnit || 0,
    score: result.score,
    grade: result.grade,
    semester: result.semester
  }));
  res.status(200).json(formattedResults);
});

const getAnnouncements = asyncHandler(async (req, res) => {
  // Use $ne (not equal) to exclude students
  const courses = await Announcement.find(); 
  
  res.status(200).json(courses);
});

const registerCourses = asyncHandler(async (req, res) => {
  const { courseIds } = req.body; 

  if (!courseIds) {
    res.status(400);
    throw new Error("No course IDs provided");
  }

  // 1. Double check the user exists
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // 2. Map the IDs
  const objectIdArray = courseIds.map(id => new mongoose.Types.ObjectId(id));

  // 3. Update using the found user instance OR findByIdAndUpdate
  user.courses = objectIdArray;
  await user.save(); // Using .save() is often more reliable for triggers/hooks

  res.status(200).json({
    message: "Courses registered successfully",
    courses: user.courses
  });
});

const removeCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.body;

  // $pull removes the courseId from the courses array
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { $pull: { courses: courseId } },
    { new: true }
  );

  if (!updatedUser) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    message: "Course removed successfully",
    courses: updatedUser.courses
  });
});
const getTimetable = asyncHandler(async (req, res) => {
  const { level } = req.query;
  const records = await Timetable.find({ level });
  res.status(200).json(records);
});

const markNotificationRead = asyncHandler(async (req, res) => {
  const { notificationId } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { read_notifications: notificationId } }, // Prevents duplicates
    { returnDocument: 'After' }
  );

  if (updatedUser) {
    res.status(200).json({ message: "Marked as read" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteNotifications = asyncHandler(async (req, res) => {
  const { notificationId } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { deleted_notifications: notificationId } }, // Prevents duplicates
    { returnDocument: 'After' }
  );

  if (updatedUser) {
    res.status(200).json({ message: "Deleted" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, password } = req.body;

  // 1. Find user (Using req.user._id from your auth middleware is safer than params)
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid current password");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user.password = hashedPassword;
  
  await user.save();

  res.status(200).json({
    message: "Password updated successfully",
  });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.phone = req.body.phone || user.phone;
  user.address = req.body.address || user.address;
  user.dob = req.body.dob || user.dob;

  // if (req.body.emailNotifications !== undefined) {
  //   user.emailNotifications = req.body.emailNotifications;
  // }
  // if (req.body.smsNotifications !== undefined) {
  //   user.smsNotifications = req.body.smsNotifications;
  // }
  // if (req.body.automaticBackup !== undefined) {
  //   user.automaticBackup = req.body.automaticBackup;
  // }

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    phone: updatedUser.phone,
    address: updatedUser.address,
    dob: updatedUser.dob,
    emailNotifications: updatedUser.emailNotifications,
    smsNotifications: updatedUser.smsNotifications,
    automaticBackup: updatedUser.automaticBackup,
    message: "Profile updated successfully"
  });
});

const getStudentsByCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.query;

  if (!courseId) {
    res.status(400);
    throw new Error("Course ID is required");
  }
  const queryId = new mongoose.Types.ObjectId(courseId);
  const students = await User.find({
    role: 'student',
    courses: queryId
  }).select('name matricNumber department _id');

  res.json(students);
});

const saveAttendance = asyncHandler(async (req, res) => {
  const { attendanceRecords } = req.body; // Expecting an array

  if (!attendanceRecords || !Array.isArray(attendanceRecords) || attendanceRecords.length === 0) {
    res.status(400);
    throw new Error("No attendance records provided");
  }

  try {
    // We add the lecturerId to every record from the auth middleware (req.user)
    const recordsWithLecturer = attendanceRecords.map(record => ({
      ...record,
      lecturerId: req.user._id 
    }));
    
    await Attendance.deleteMany({
      courseId: attendanceRecords[0].courseId,
      date: attendanceRecords[0].date
    });

    const savedAttendance = await Attendance.insertMany(recordsWithLecturer);

    res.status(201).json({
      message: "Attendance recorded successfully",
      count: savedAttendance.length
    });
  } catch (error) {
    res.status(500);
    throw new Error("Failed to save attendance: " + error.message);
  }
});

const getResultsByContext = async (req, res) => {
  try {
    const { courseId, semester, assessmentType } = req.query;

    const results = await Result.find({
      courseId,
      semester,
      assessmentType
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveResults = async (req, res) => {
  try {
    const { records } = req.body;

    if (!records || !Array.isArray(records)) {
      return res.status(400).json({ message: "No records provided" });
    }

    // Prepare bulk operations
    const bulkOps = await Promise.all(records.map(async (rec) => {
      // Fetch the student's current level from their User profile
      const student = await User.findById(rec.studentId);
      const studentLevel = student ? student.level : "N/A";
      console.log(`h ${rec.level}`);

      return {
        updateOne: {
          filter: { 
            studentId: rec.studentId, 
            courseId: rec.courseId, 
            assessmentType: rec.assessmentType,
            semester: rec.semester
          },
          update: { 
            $set: { 
              score: rec.score, 
              grade: rec.grade, 
              // session: rec.session,
              lecturerId: req.user._id, // Set from Auth middleware
              level: studentLevel      // Added level here
            } 
          },
          upsert: true // If not found, create new. If found, update.
        }
      };
    }));

    const result = await Result.bulkWrite(bulkOps);

    res.status(200).json({ 
      message: `Successfully processed ${records.length} grades`,
      details: result 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMaterial = async (req, res) => {
  try {
    const { courseId } = req.query;

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    // Find materials matching the course and sort by newest first
    const materials = await Material.find({ courseId })
      .sort({ createdAt: -1 });

    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uploadMaterial = asyncHandler(async (req, res) => {
  try {
    if (!req.file) {
      res.status(400);
      throw new Error("No file uploaded");
    }

    // Destructure exactly what the frontend sends
    const { title, type, message, courseId, courseTitle } = req.body;

    const newMaterial = await Material.create({
      title,
      message,            // Now required by your model
      fileType: type,     // Map 'type' from frontend to 'fileType' in model
      courseId,
      courseTitle,        // Now required by your model
      lecturerId: req.user._id,
      fileUrl: req.file.path.replace(/\\/g, "/"),
      fileName: req.file.originalname,
      fileSize: req.file.size
    });

    res.status(201).json({ 
      message: "Material uploaded successfully!", 
      material: newMaterial 
    });
  } catch (error) {
    console.error("DETAILED DB ERROR:", error);
    
    // Cleanup the file if DB insert fails
    if (req.file) {
      fs.unlinkSync(path.resolve(req.file.path));
    }
    
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete Material and associated File
const deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) return res.status(404).json({ message: "Not found" });

    // 1. Delete file from local storage
    const filePath = path.join(__dirname, '..', material.fileUrl);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // 2. Delete from DB
    await material.deleteOne();
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyAnnouncements = asyncHandler(async (req, res) => {
  // Use req.user._id (attached by your 'protect' middleware) 
  // to filter the database records
  const announcements = await Announcement.find({ userId: req.user._id })
    .sort({ createdAt: -1 });

  // Note: .find() returns an empty array [] if nothing is found, 
  // not null, so we check the length.
  if (!announcements || announcements.length === 0) {
    return res.status(200).json([]); // Better to return empty array than a 404 error
  }

  res.status(200).json(announcements);
});

const addAnnouncements = asyncHandler(async (req, res) => {
  const { title, content, target } = req.body;
  const userId = req.user._id;
  const announcement = await Announcement.create({ title, content, target, userId });
  res.status(201).json({
    message: "Announcement sent successfully",
    announcement
  });
});

const deleteAnnouncements = asyncHandler(async (req, res) => {
  const announcement = await Announcement.findById(req.params.id);
  if (!announcement) { res.status(404); throw new Error("Not found"); }
  await announcement.deleteOne();
  res.json({ message: "Announcement removed" });
});

export  {
  registerUser,
  login,
  getMe,
  updateProfileImage,
  getCourses,
  getMyCourses,
  getMyResults,
  getResults,
  getAnnouncements,
  registerCourses,
  removeCourse,
  getTimetable,
  markNotificationRead,
  deleteNotifications,
  changePassword,
  updateUserProfile,
  getStudentsByCourse,
  saveAttendance,
  getResultsByContext,
  saveResults,
  getMaterial,
  uploadMaterial,
  deleteMaterial,
  getMyAnnouncements,
  addAnnouncements,
  deleteAnnouncements
};
