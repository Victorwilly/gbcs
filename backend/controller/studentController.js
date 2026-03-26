import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import LecturerCourseAssignment from '../models/teacherModels/lecturerCourseAssignment.js'
import Course from '../models/courseModel.js';
import Admission from '../models/Admission/AdmissionModel.js';
import Timetable from '../models/timeTable.js';
import Payment from '../models/paymentsModel.js';
import AdminReport from '../models/reportModel.js';
import RecentReport from '../models/recentReportsModel.js';
import Announcement from '../models/announcementModal.js';
import InstitutionInfo from'../models/InstitutionInfo.js';

import { populate } from 'dotenv';

// generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  console.log("d");
  try {
    let admin = await User.findOne({ email });

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(admin._id);

    res.status(200).json({
      message: "Login successful",
      _id: admin._id,
      email: admin.email,
      token: token // This is the "key" your dashboard needs!
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



export { 
  loginStudent,
};
