const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "India",
    },

    education: {
      type: String,
      default: "B.Tech Computer Science",
    },

    skills: {
      type: [String],
      default: [],
    },

    socialLinks: {
      github: {
        type: String,
      },

      linkedin: {
        type: String,
      },
    },

    stats: {
      leetcode: {
        type: String,
        default: "100+",
      },

      projects: {
        type: String,
        default: "3+",
      },

      internships: {
        type: String,
        default: "2+",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);