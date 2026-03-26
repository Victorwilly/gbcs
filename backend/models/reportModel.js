import mongoose from 'mongoose';

const recentReportSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true
  },
  report: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

export default mongoose.model('Report', recentReportSchema);