const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: false
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true
    },

    completedLessonIds: {
      type: [String],
      default: []
    },

    completedLessons: {
      type: Number,
      default: 0
    },

    totalLessons: {
      type: Number,
      default: 10
    }
  },

  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("User", userSchema);