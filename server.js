require("dotenv").config();
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/routes/studentRoutes");
const db = require("./src/db/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/students", studentRoutes);

db.query("SELECT 1 + 1 AS result")
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
