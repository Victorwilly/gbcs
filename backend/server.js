import express from 'express'
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import colors from 'colors'
import connectDB from './config/db.js'

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

import {errorHandler} from './middleware/errorMiddleWare.js'
import userRoutes from './routes/userRoutes.js';
import admissionRoutes from './routes/admissionRoute/admissionRoute.js';
import assignmentRoutes from './routes/teacherRoute/assignmentRoute.js';
import lecturerRoutes from './routes/teacherRoute/lecturerRoute.js';
import adminCourseRoutes from './routes/adminCourseRoute.js';
import studentCourseRoutes from './routes/coursesRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import courseRegRoutes from './routes/courseRegistrationRoutes.js';
import adminRoutes from './routes/adminRoute.js';
import resultRoutes from './routes/resultRoutes.js';

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/admission', admissionRoutes);
app.use('/api/lecturer/student-assignment', assignmentRoutes);
app.use('/api/lecturer/student-courses', lecturerRoutes);
app.use('/api/admin/courses', adminCourseRoutes);
app.use('/api/student/courses', studentCourseRoutes);
app.use('/api/admin/create-departments', departmentRoutes);
app.use('/api/registercourse', courseRegRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/results', resultRoutes);
app.use("/api/users", userRoutes);
app.get("/api/dog", (req, res)=>{
  res.json({'users':'me'});
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`.cyan.underline);
});
