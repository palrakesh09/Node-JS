const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
connectDB();

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/teacher", require("./routes/teacherRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
