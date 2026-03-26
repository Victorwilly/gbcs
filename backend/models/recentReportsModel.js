import mongoose from 'mongoose';

const recentReportSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true
  },
  type: { 
    type: String, 
    enum: ['Academic', 'Attendance', 'Enrollment', 'Financial'],
    required: true 
  },
  fromDate: { type: String, required: true },
  toDate: { type: String, required: true },
  fileSize: { type: String, default: "1.2 MB" }
}, { timestamps: true });

export default mongoose.model('RecentReport', recentReportSchema);