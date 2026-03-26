import express from 'express';
const router = express.Router()
import {
    createAssignment,
    getAssignments,
    updateAssignment,
    deleteAssignment
}from '../../controller/teacherController/assignmentController.js';

import {protect} from '../../middleware/authMiddleWare.js'
router.route('/')
.get(protect,  getAssignments)
.post(protect, createAssignment)

router.route('/:id')
  .put(protect,  updateAssignment)
  .delete(protect, deleteAssignment);


export default router