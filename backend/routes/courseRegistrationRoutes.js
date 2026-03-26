import express from "express";
const router = express.Router();
import { registerCourses ,
    getAllRegisteredCourses
} from "../controller/courseRegisterController.js";
import { protect } from '../middleware/authMiddleWare.js';

// Protect this route so only logged-in users can access
router.post('/', protect, registerCourses);
router.get('/',protect, getAllRegisteredCourses)

export default router;
