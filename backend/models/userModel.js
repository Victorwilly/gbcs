import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  department: {
      type: String,
    },
    courses:{
      type:Array
    },
    deleted_notifications:{
      type:Array
    },
    read_notifications:{
      type:Array
    },
    address:{
      type:String
    },
    dob:{
      type:String
    },
    cgpa:{
      type:Number
    },
  name: {
    type: String,
    required: [true, 'please add a name']
  },
  email: {
    type: String,
    required: [true, 'please add an email'],
    unique: true
  },
  room: {
    type: String,
  },
level: {
        type: String,
       // required: [true, 'Please enter a level']
    },
    program: {
      type: String,
  },
 matricNumber:{
  type: String,
  unique: true,
  sparse: true, // This tells MongoDB: "Only enforce uniqueness if the field exists"
  default: null,
    },
    staffId: {
      type: String,
      unique: true,
      sparse: true, // This tells MongoDB: "Only enforce uniqueness if the field exists"
      default: null,
    },
  password: {
    type: String,
    required: [true, 'please add a password']
  },
  role: {
    type: String,
    // enum: ["student", "lecturer", "admin"],
    default: 'student'
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: 'Active'
  },
  payment_status:{
    type:Boolean,
    default: false

  },
  profileImage: {
    type: String, // will just store file path e.g. "uploads/172789-photo.jpg"
    default: null
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;