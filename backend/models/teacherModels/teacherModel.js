const mongoose from "mongoose");

const lecturerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    uploadCourseMaterials: [
      {
        fileName: String,
        fileUrl: String, 
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    timetable: {
      type: String, // could be a file path or URL to a PDF
      default: null,
    },

    results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", lecturerSchema);
