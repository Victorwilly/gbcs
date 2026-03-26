import express from 'express'
const router = express.Router()
import {
   getStudentAssignedToCourses
} from '../../controller/teacherController/lecturerController.js'

import { protect } from '../../middleware/authMiddleWare.js'

router.route('/')

.get(protect, getStudentAssignedToCourses)
export default router;