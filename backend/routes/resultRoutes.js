import express from 'express';
const router = express.Router()
import {createResults,
    getMyResults,
    getAllResults,createAssignmentRecord,
    getAllResultsByLecturer} from '../controller/resultController.js'

import {protect} from '../middleware/authMiddleWare.js'

 router.route('/')
  .get( protect, getAllResults)
  .get(protect, getAllResultsByLecturer)
  .post(protect, createResults)
  .post(protect, createAssignmentRecord);


export default router;

