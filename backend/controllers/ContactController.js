const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = {
  createContact,
};