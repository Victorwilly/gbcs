import express from 'express';
const router = express.Router()
import {getCoursesByStudents,
    } from '../controller/courseController.js'

import {protect} from '../middleware/authMiddleWare.js'

 router.route('/')
  .get(protect, getCoursesByStudents);

export default router;

