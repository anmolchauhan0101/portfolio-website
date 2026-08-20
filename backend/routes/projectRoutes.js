const express = require("express");

const {
  getProjects,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects);

module.exports = router;