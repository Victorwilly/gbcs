import express from 'express';
const router = express.Router()
import {
    getCoursesByAdmin,
    createCourse,
    updateCourse,
    deleteCourse,} from '../controller/courseController.js'

import {protect} from '../middleware/authMiddleWare.js'

 router.route('/')
  .get(protect,  getCoursesByAdmin)
  .post(protect, createCourse);
 

router.route('/:id')
  .put(protect, updateCourse)
  .delete(protect, deleteCourse);

export default router;
