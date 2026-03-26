import express from 'express';
const router = express.Router();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { 
  registerUser, 
  updateProfileImage, 
  login, 
  getMe,
  getMyCourses,
  getCourses,
  getResults,
  getMyResults,
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
  addAnnouncements,
  deleteAnnouncements,
  getMyAnnouncements
} from '../controller/userController.js'; // Added .js

import { protect } from '../middleware/authMiddleWare.js'; // Added .js
import multer from 'multer';
import path from 'path';



// === Multer setup ===
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // This looks for an 'uploads' folder in your project root
    cb(null, './uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, '-'));
  }
});


const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg","images/jpg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images, PDFs, and Docs are allowed."), false);
    }
  },
});

// === Routes ===
router.post('/', registerUser);
router.post('/login', login);
router.post("/register", registerUser);
router.get('/me', protect, getMe);
router.get('/my-courses', protect, getMyCourses);
router.get('/courses', protect, getCourses);
router.get('/results', protect, getResults);
router.get('/my-results', protect, getMyResults);
router.put('/register-courses', protect, registerCourses);
router.delete('/remove-course', protect, removeCourse);
router.get( '/timetable',protect, getTimetable);
router.put( '/notifications/read',protect, markNotificationRead);
router.put( '/notifications/delete',protect, deleteNotifications);
router.put( '/password',protect, changePassword);
router.put( '/settings',protect, updateUserProfile);
router.get( '/students-by-course',protect, getStudentsByCourse);
router.post( '/attendance',protect, saveAttendance);
router.get( '/results',protect, getResultsByContext);
router.post( '/results',protect, saveResults);
router.get( '/materials',protect, getMaterial);
router.post( '/materials',protect, upload.single('file'), uploadMaterial);
router.delete( '/materials/:id',protect, deleteMaterial);
router.get('/announcements', protect, getAnnouncements);
router.get('/my-announcements', protect, getMyAnnouncements);
router.post( '/announcements',protect, addAnnouncements);
router.delete( '/announcements',protect, deleteAnnouncements);

// Profile image upload (protected route)
router.post(
  '/profile',
  protect,
  upload.single('profileImage'), // multer middleware
  updateProfileImage             // controller function
);

export default router;
