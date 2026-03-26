import express from 'express';
const router = express.Router()
import {
    loginAdmin,
    getAllUsers,
    adminCreateUser,
    getUserById,
    updateUser,
    deleteUser,
    adminAssignCoursesToLecturers,
    getAllCourses,
    adminUpdateCourse,
    adminDeleteCourse,
    getDashboardStats,
    getAllStudents,
    getAllStaffs,
    getTimetable,
    addTimetable,
    adminDeleteTimeTable,
    getAllPayments,
    getRecentReports,
    generateAndLogReport,
    getAnnouncements,
    addAnnouncements,
    deleteAnnouncements,
    allocateStudent,
    removeStudentFromRoom,
    getInstitutionInfo,
    saveInstitutionInfo
} from '../controller/adminController.js'

import {protect} from '../middleware/authMiddleWare.js'

 router.get( '/', protect, getAllUsers)
 router.post('/assign-courses', protect, adminAssignCoursesToLecturers)
router.post( '/create-user',protect, adminCreateUser);
router.post( '/login', loginAdmin);
router.get( '/stats',protect, getDashboardStats);
router.get( '/students',protect, getAllStudents);
router.get( '/staffs',protect, getAllStaffs);
router.get( '/course',protect, getAllCourses);
router.post( '/course',protect, adminAssignCoursesToLecturers);
router.get( '/timetable',protect, getTimetable);
router.post( '/timetable',protect, addTimetable);
router.delete('/timetable/:id', protect, adminDeleteTimeTable);
router.get( '/payments',protect, getAllPayments);
router.get( '/reports',protect, generateAndLogReport);
router.get( '/recent-reports',protect, getRecentReports);
router.get( '/announcements',protect, getAnnouncements);
router.post( '/announcements',protect, addAnnouncements);
router.delete( '/announcements/:id',protect, deleteAnnouncements);
router.post( '/allocate-room',protect, allocateStudent);
router.put( '/remove/:id',protect, removeStudentFromRoom);
router.get( '/institution-info',protect, getInstitutionInfo);
router.post( '/institution-info',protect, saveInstitutionInfo);

router.route('/:id')
 .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

router.route('/course/:id')
  .put(protect, adminUpdateCourse)
  .delete(protect, adminDeleteCourse);


export default router;
