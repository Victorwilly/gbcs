import mongoose from'mongoose';

const materialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the material'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Please add a message for the material'],
  },
  fileType: {
    type: String,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  courseTitle: {
    type: String,
    required: true
  },
  lecturerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // The path to the file on your server (e.g., "uploads/materials/12345.pdf")
  fileUrl: {
    type: String,
    required: true
  },
  // Original name of the file
  fileName: {
    type: String,
    required: true
  },
  // File size in bytes (useful for the "2.4 MB" display in your UI)
  fileSize: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // This automatically provides the "createdAt" date for your UI
});

export default mongoose.model('Material', materialSchema);