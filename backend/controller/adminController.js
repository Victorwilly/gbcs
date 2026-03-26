import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import LecturerCourseAssignment from '../models/teacherModels/lecturerCourseAssignment.js'
import Course from '../models/courseModel.js';
import Admission from '../models/Admission/AdmissionModel.js';
import Timetable from '../models/timeTable.js';
import Payment from '../models/paymentsModel.js';
import AdminReport from '../models/reportModel.js';
import RecentReport from '../models/recentReportsModel.js';
import Announcement from '../models/announcementModal.js';
import InstitutionInfo from'../models/InstitutionInfo.js';

import { populate } from 'dotenv';


import Admin from '../models/adminModel.js';

// generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });

    if (!admin) {
      admin = await Admin.create({
        email,
        password,
      });
    }

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      message: "Login successful",
      _id: admin._id,
      email: admin.email,
      token: token // This is the "key" your dashboard needs!
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllUsers = asyncHandler(async (req, res) => {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403);
    throw new Error("Access denied, Admin only");
  }
    const user = await User.find()
    res.status(200).json(user);
});

const getAllStudents = asyncHandler(async (req, res) => {
  const users = await User.find({ role: 'student' }); 
  
  res.status(200).json(users);
});

const getAllStaffs = asyncHandler(async (req, res) => {
  // Use $ne (not equal) to exclude students
  const users = await User.find({ role: { $ne: 'student' } }); 
  
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403);
    throw new Error("Access denied, Admin only");
  }

  const userId = req.params.id;

  const user = await User.findById(userId)
    .populate("department", "departmentName")
    .populate({
      path: "results",
      populate: [
        { path: "courses", select: "courseTitle courseCode creditUnit" },
        { path: "department", select: "departmentName" }
      ],
    });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // response to match frontend StudentData type
  const response = {
    _id: user._id,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage,
    },
    department: user.department,
    results: user.results || [],
  };

  res.status(200).json(response);
});


const adminCreateUser = asyncHandler(async (req, res) => {
  // if (!req.user || req.user.role !== "admin") {
  //   res.status(403);
  //   throw new Error("Access denied, Admin only");
  // }
  
  const { name, email, password, role, level, matricNumber, program, department, staffId, phone } =
    req.body;

  // COMMON FIELDS FOR ALL USERS
  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Name, email, password and role are required");
  }

  // ROLE-BASED VALIDATION
  if (role === "student") {
    if (!level || !matricNumber || !department || !program) {
      res.status(400);
      throw new Error("Students must have program, level, matric number and department");
    }
  }

  if (role != "student") {
    if (!staffId || !department) {
      res.status(400);
      throw new Error("Staffs must have staff ID and department");
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
    throw new Error("User already exists");
  }
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    res.status(400);
    throw new Error("Phone number already in use");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    level,
    matricNumber,
    staffId,
    program,
    department,
    phone,
    role,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      level: user.level,
      matricNumber: user.matricNumber,
      staffId: user.staffId,
      phone: user.phone,
      department: user.department,
      program: user.program,
      role: user.role,
      message: "User created successfully",
      token: generateToken(user._id),
    }); 
  }else{
    res.status(400);
    throw new Error("User was not created");
  }  
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // 1. Check if a password is being sent in the update request
  if (req.body.password && req.body.password.trim() !== "") {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  } else {
    delete req.body.password;
  }

  // 3. Update the rest of the fields
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id, 
    { $set: req.body }, 
    { new: true, runValidators: true }
  ).select("-password"); // Don't send the hashed password back to the frontend

  res.status(201).json({
    message: "User updated",
    updatedUser
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  // if (!req.user || req.user.role !== 'admin') {
  //   res.status(403);
  //   throw new Error("Access denied, Admin only");
  // }

  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await User.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: 'A user was deleted', id: req.params.id });
});


const adminAssignCoursesToLecturers = asyncHandler(async (req, res) => {
  const { 
    lecturerId, 
    courseTitle, 
    courseLevel, 
    courseUnit, 
    courseCode, 
    semester, 
    program,
    day,
    time
  } = req.body;
  if (!lecturerId || !courseTitle || !courseCode || !semester) {
    res.status(400);
    throw new Error("Lecturer ID, Course Title, Course Code, and Semester are required");
  }

  const lecturer = await User.findById(lecturerId);
  if (!lecturer || (lecturer.role !== "lecturer" && lecturer.role !== "staff")) {
    res.status(404);
    throw new Error("Lecturer not found or invalid role");
  }

  const existingCourse = await Course.findOne({
    courseCode, // Better to check by code as titles can be similar
    semester,
    program
  });

  if (existingCourse) {
    res.status(400);
    throw new Error(`Course ${courseCode} is already assigned/created for this semester.`);
  }

  const assignment = await Course.create({
    lecturerId,
    lecturer: lecturer.name,
    department: lecturer.department,
    program,
    courseLevel,
    courseUnit,
    courseTitle,
    courseCode,
    semester,
    day,
    time
  });

  await User.findByIdAndUpdate(lecturerId, {
    $addToSet: { courses: assignment._id }
  });

  res.status(201).json({
    message: "Course created and assigned to lecturer successfully",
    assignment
  });
});

const getAllCourses = asyncHandler(async (req, res) => {
  // Use $ne (not equal) to exclude students
  const courses = await Course.find(); 
  
  res.status(200).json(courses);
});

const adminUpdateCourse = asyncHandler(async (req, res) => {
  const { lecturerId, courseTitle, day, time, courseLevel, courseUnit, courseCode, semester, program } = req.body;
  const courseId = req.params.id;

  const course = await Course.findById(courseId);

  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  
  // 1. Logic for Lecturer Assignment/Change
  if (lecturerId && lecturerId === course.lecturerId?.toString()) {
    const lecturer = await User.findById(lecturerId);
    
    if (!lecturer || (lecturer.role !== "lecturer" && lecturer.role !== "staff")) {
      res.status(404);
      throw new Error("New lecturer not found or invalid role");
    }

    // A. Remove course ID from the OLD lecturer's array (if one existed)
    if (course.lecturerId) {
      await User.findByIdAndUpdate(course.lecturerId, {
        $pull: { courses: courseId }
      });
    }

    // B. Add course ID to the NEW lecturer's courses array
    // $addToSet prevents duplicate IDs in the array
    await User.findByIdAndUpdate(lecturerId, {
      $addToSet: { courses: courseId }
    });

    // C. Update lecturer details in the course document
    course.lecturerId = lecturerId;
    course.lecturer = lecturer.name;
    course.department = lecturer.department;
  }

  // 2. Update other fields
  course.courseTitle = courseTitle || course.courseTitle;
  course.courseLevel = courseLevel || course.courseLevel;
  course.courseUnit = courseUnit || course.courseUnit;
  course.courseCode = courseCode || course.courseCode;
  course.semester = semester || course.semester;
  course.program = program || course.program;
  course.day = day || course.day;
  course.time = time || course.time;

  const updatedCourse = await course.save();

  res.status(200).json({
    message: "Course and Lecturer records updated successfully",
    updatedCourse
  });
});

const adminDeleteCourse = asyncHandler(async (req, res) => {
  const courseId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    res.status(400);
    throw new Error("Invalid Course ID format");
  }

  const course = await Course.findById(courseId);

  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }

  const objectId = new mongoose.Types.ObjectId(courseId);

  await User.updateMany(
    { courses: objectId }, 
    { $pull: { courses: objectId } }
  );

  await course.deleteOne();

  res.status(200).json({
    message: "Course removed successfully and cleared from all user records"
  });
});

const getTimetable = asyncHandler(async (req, res) => {
  const { level } = req.query;
  const records = await Timetable.find({ level });
  res.status(200).json(records);
});

const addTimetable = asyncHandler(async (req, res) => {
  const { course,courseId, lecturer, time, room, day, level } = req.body;

  if (!course || !lecturer || !time || !room || !day || !level) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const collision = await Timetable.findOne({ day, time, room });
  if (collision) {
    res.status(400);
    throw new Error(`Room conflict: ${room} is already occupied at ${time} on ${day}`);
  }

  const slot = await Timetable.create({
    course,
    courseId,
    lecturer,
    time,
    room,
    day,
    level
  });

  res.status(201).json({
    message: "Timetable slot added successfully",
    slot
  });
});

const adminDeleteTimeTable = asyncHandler(async (req, res) => {
  const slot = await Timetable.findById(req.params.id);

  if (!slot) {
    res.status(404);
    throw new Error("Timetable slot not found");
  }

  await slot.deleteOne();

  res.status(200).json({
    message: "Slot removed from timetable successfully"
  });
});

const getAllPayments = asyncHandler(async (req, res) => {
  const payments = await Payment.find({}).sort({ createdAt: -1 });

  if (!payments) {
      res.status(404);
      throw new Error("No payment records found");
  }

  res.status(200).json(payments);
});

const getRecentReports = asyncHandler(async (req, res) => {
  const reports = await RecentReport.find().sort({ createdAt: -1 });
  res.status(200).json(reports);
});

const generateAndLogReport = asyncHandler(async (req, res) => {
  const { type, fromDate, toDate, title } = req.body;

  const reportData = await AdminReport.find({
    type: type,
    createdAt: {
      $gte: new Date(fromDate),
      $lte: new Date(toDate)
    }
  });

  if (!reportData || reportData.length === 0) {
    res.status(404);
    throw new Error("No reports found in the selected date range");
  }

  const historyLog = await RecentReport.create({
    title,
    type,
    fromDate,
    toDate,
    fileSize: `${(Math.random() * (2.5 - 0.8) + 0.8).toFixed(1)} MB` 
  });

  res.status(200).json({
    data: reportData,
    log: historyLog
  });
});

const getAnnouncements = asyncHandler(async (req, res) => { 
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

const removeStudentFromRoom = asyncHandler(async (req, res) => {
  const student = await User.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  student.room = "";
  await student.save();

  res.status(200).json({ message: "Student removed from room successfully" });
});

const allocateStudent = asyncHandler(async (req, res) => {
  const { studentId, roomNumber } = req.body;
  if (!studentId || !roomNumber) {
      res.status(400);
      throw new Error("Please provide student ID and room number");
  }

  const student = await User.findById(studentId);

  if (!student) {
      res.status(404);
      throw new Error("Student not found");
  }

  student.room = roomNumber;
  await student.save();

  res.status(200).json({
      message: `Student successfully allocated to Room ${roomNumber}`,
      student
  });
});

const saveInstitutionInfo = asyncHandler(async (req, res) => {
  const settingsData = req.body;

  // We use an empty filter {} because we only ever want one single row in this table
  const settings = await InstitutionInfo.findOneAndUpdate(
    {}, 
    settingsData, 
    { 
      new: true,      // Return the updated document
      upsert: true,   // Create if it doesn't exist
      runValidators: true 
    }
  );

  res.status(200).json({
    message: `Settings updated`,
    settings
});
});

const getInstitutionInfo = asyncHandler(async (req, res) => {
  const settings = await InstitutionInfo.findOne({});
  res.status(200).json(settings);
});

export const getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'student' });

    const activeStaff = await User.countDocuments({ role: { $ne: 'student' } });

    const totalCourses = await Course.countDocuments();

    // 4. Calculate Revenue (Users with payment_status: true * 50,000)
    const paidUsersCount = await User.countDocuments({ payment_status: true });
    const revenue = paidUsersCount * 50000;

    // Fetch Recent Registrations (Last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentRegistrations = await Admission.find({
      createdAt: { $gte: thirtyDaysAgo }
    })
    .sort({ createdAt: -1 }) // Newest first
    .limit(5)
    .select('personalInfo.fullName enrollmentInfo.department createdAt');

    res.status(200).json({
      totalStudents,
      activeStaff,
      totalCourses,
      revenue,
      recentRegistrations
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error: error.message });
  }
};



export { 
  loginAdmin,
  getAllUsers,
  getAllStaffs,
  getAllStudents,
  getUserById,
  adminCreateUser,
  updateUser,
  deleteUser,
  adminAssignCoursesToLecturers,
  getAllCourses,
  adminDeleteCourse,
  adminUpdateCourse,
  getTimetable,
  addTimetable,
  adminDeleteTimeTable,
  getAllPayments,
  generateAndLogReport,
  getRecentReports,
  getAnnouncements,
  addAnnouncements,
  deleteAnnouncements,
  removeStudentFromRoom,
  allocateStudent,
  getInstitutionInfo,
  saveInstitutionInfo
};
