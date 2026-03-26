import mongoose from "mongoose";

const admissionSchema = mongoose.Schema(
  {
    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
},

    // PERSONAL INFORMATION 
    personalInfo: {
      fullName: {
        type: String,
        required: [true, "Please enter your full name"],
      },

      email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
      },

      phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"],
      },

      dateOfBirth: {
        type: Date,
        required: [true, "Please enter your date of birth"],
      },

      presentAddress: {
        type: String,
        required: [true, "Please enter your present address"],
      },

      permanentAddress: String,

      village: String,

      localGovernmentArea: {
        type: String,
        required: [true, "Please enter your local government area"],
      },

      stateOfOrigin: {
        type: String,
        required: [true, "Please enter your state of origin"],
      },

      citizenship: {
        type: String,
        required: [true, "Please enter your citizenship"],
      },

      poBox: String,

      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced"],
        required: [true, "Please select your marital status"],
      },
    },

    //  ENROLLMENT INFORMATION 
    enrollmentInfo: {
      startMonth: {
        type: String,
        required: [true, "Please enter start month"],
      },

      startYear: {
        type: String,
        required: [true, "Please enter start year"],
      },

      programType: {
        type: String,
        enum: ["Full Time", "Part Time", "Distance Learning"],
        required: [true, "Please select program type"],
      },

      department: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Department",
        type: String,
        required: [true, "Please select department"],
      },

      currentOccupation: {
        type: String,
        required: [true, "Please enter current occupation"],
      },

      sponsorship: {
        type: String,
        required: [true, "Please enter sponsorship name"],
      },

      pastorName: {
        type: String,
        required: [true, "Please enter pastor name"],
      },

      relationshipWithPastor: {
        type: String,
        required: [true, "Please enter relationship with pastor"],
      },

      nextOfKinName: {
        type: String,
        required: [true, "Please enter next of kin name"],
      },

      relationshipWithNextOfKin: {
        type: String,
        required: [true, "Please enter relationship with next of kin"],
      },
    },

    // RELIGIOUS + EDUCATION 
    religiousEducationInfo: {
      churchName: {
        type: String,
        required: [true, "Please enter church name"],
      },

      churchAddress: {
        type: String,
        required: [true, "Please enter church address"],
      },

      memberStatus: {
        type: String,
        enum: ["yes", "no"],
        required: [true, "Please select church membership"],
      },

      conversionDate: {
        type: Date,
        required: [true, "Please enter conversion date"],
      },

      testimonyMessage: {
        type: String,
        required: [true, "Please provide conversion testimony"],
      },

      secondarySchool: {
        type: String,
        required: [true, "Please enter secondary school name"],
      },

      secondarySchoolDates: {
        type: String,
        required: [true, "Enter secondary school dates"],
      },

      secondarySchoolCertificates: {
        type: String,
        enum: ["WAEC", "NECO"],
        required: [true, "Select certificate type"],
      },

      collegeSchool: {
        type: String,
        required: [true, "Please enter college/university"],
      },

      collegeSchoolDates: {
        type: String,
        required: [true, "Enter college dates"],
      },
    },

    //  APPLICATION STATUS 
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admission", admissionSchema);
