const express = require("express");
const router = express.Router();

const Experience = require("../models/Experience");

/* ================= GET ALL EXPERIENCE ================= */

router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({
      createdAt: -1,
    });

    res.status(200).json(experiences);
  } catch (error) {
    console.error("Experience fetch error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch experience",
    });
  }
});

/* ================= ADD EXPERIENCE ================= */

router.post("/", async (req, res) => {
  try {
    const {
      year,
      title,
      company,
      description,
    } = req.body;

    const experience = new Experience({
      year,
      title,
      company,
      description,
    });

    const savedExperience = await experience.save();

    res.status(201).json(savedExperience);
  } catch (error) {
    console.error("Experience creation error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create experience",
    });
  }
});

module.exports = router;