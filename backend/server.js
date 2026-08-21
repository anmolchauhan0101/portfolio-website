const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const profileRoutes = require("./routes/profileRoutes");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const experienceRoutes = require("./routes/experienceRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* ================= DATABASE ================= */

connectDB();

/* ================= MIDDLEWARE ================= */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-website-alpha-one-52.vercel.app",
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

/* ================= ROOT ================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Anmol Portfolio API is running",
  });
});

/* ================= API ROUTES ================= */

app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/experience", experienceRoutes);

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});