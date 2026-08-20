const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({
      createdAt: -1,
    });

    res.status(200).json(projects);
  } catch (error) {
    console.error("Projects error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

module.exports = {
  getProjects,
};