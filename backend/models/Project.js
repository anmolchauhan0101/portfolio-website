const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    technologies: {
      type: [String],
      default: [],
    },

    github: {
      type: String,
      required: true,
    },

    live: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);