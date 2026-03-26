import mongoose from 'mongoose';

const InstitutionInfoSchema = new mongoose.Schema({
  // Institution Information section
  name: { 
    type: String, 
    default: 'Grace Bible Institute & Seminary' 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },

  // Academic Session section
  currentSession: { 
    type: String, 
    placeholder: '2024/2025' 
  },
  currentSemester: { 
    type: String,
    required: true,
    default: '1st Semester' 
  },

  // Notifications section
  emailNotifications: { 
    type: Boolean, 
    default: true 
  },
  smsNotifications: { 
    type: Boolean, 
    default: false 
  },
  automaticBackup: { 
    type: Boolean, 
    default: true 
  }
}, { 
  timestamps: true,
  // This ensures that even if you have multiple settings, 
  // they are contained within a single collection context
  collection: 'institutioninformation' 
});

export default mongoose.model('InstitutionInfo', InstitutionInfoSchema);