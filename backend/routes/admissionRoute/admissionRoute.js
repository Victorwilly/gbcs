import express from 'express'
const router = express.Router()
import {
    createAdmission,
    getAllAdmissionByAdmin
} from '../../controller/AdmissionController/admissionController.js'
import {protect} from '../../middleware/authMiddleWare.js'

// Separate them to be safe
router.post('/', createAdmission); // PUBLIC - No 'protect' here
router.get('/', protect, getAllAdmissionByAdmin); // PROTECTED - Requires Token

export default router
