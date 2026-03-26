import express from 'express';
const router = express.Router()
import {getDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment,} from '../controller/departmentController.js'

import {protect} from '../middleware/authMiddleWare.js'


 router.route('/')
  .get(getDepartments)
  .post(protect, createDepartment);

router.route('/:id')
  .put(protect, updateDepartment)
  .delete(protect, deleteDepartment);

export default router;

