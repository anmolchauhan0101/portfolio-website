const express = require("express");

const {
  getProjects,
} = require("../controllers/ProjectController");

const router = express.Router();

router.get("/", getProjects);

module.exports = router;