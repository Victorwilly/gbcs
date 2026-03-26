import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  matricNumber: { type: String, required: true },
  amount: { type: Number, required: true }, // Store as number for math
  semester: { type: String, required: true }, // e.g., "2024/2025 - 2nd"
  status: { 
    type: String, 
    enum: ['paid', 'pending', 'overdue'], 
    default: 'pending' 
  },
  datePaid: { type: Date }
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);