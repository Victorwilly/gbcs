import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: [true, 'Please enter a course title'],
    },
    courseCode: {
      type: String,
      required: [true, 'Please enter a course code'],
    },
    courseUnit: {
      type: Number,
      required: [true, 'Please enter the course unit'],
    },
    semester: {
      type: String,
      required: [true, 'Please enter the semester'],
    },
    courseLevel: {
      type: String,
      enum: ['100', '200', '300', '400'],
      required: [true, 'Please select a course level'],
    },
    courseMaterials: [
      {
        type: String,
      },
    ]
    ,
    department: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    lecturer: {
      type: String,
      required: true,
    },
    lecturerId: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },

    //  Mark if this course is an elective at all
    isElective: {
      type: Boolean,
      default: false,
    },

    // Mark if it’s an *outside elective* (open to other departments)
    isOutsideElective: {
      type: Boolean,
      default: false,
    },

    // Optionally: specify which departments can take this course as an elective
    allowedDepartments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Course', courseSchema);
