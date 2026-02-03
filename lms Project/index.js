const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")
const connectDB = require("./config/db.js")

const PORT = process.env.PORT || 5000

connectDB();

dotenv.config();

app.use(express.json({ extended: true }))
app.use(cors())

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})