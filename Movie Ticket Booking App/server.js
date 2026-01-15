const express = require("express");
const cookieParser = require("cookie-parser");
require("./config/db");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


app.set("view engine", "ejs");


app.use("/", require("./routes/movieRoutes"));
app.use("/admin", require("./routes/adminRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/booking", require("./routes/bookingRoutes"));


app.listen(3000, () => console.log("Server running on 3000"));