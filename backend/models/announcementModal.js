import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  target: { 
    type: String,
    default: 'students' 
  },
}, { timestamps: true });

export default mongoose.model('Announcement', announcementSchema);