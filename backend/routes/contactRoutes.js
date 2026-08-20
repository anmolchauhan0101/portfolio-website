const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

/* ================================
   POST CONTACT MESSAGE
================================ */

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});


/* ================================
   GET CONTACT MESSAGES
   Useful for testing/admin later
================================ */

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    console.error("Contact fetch error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages.",
    });
  }
});


module.exports = router;