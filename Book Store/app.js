const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');


const app = express();
connectDB();


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static( 'public'));


app.use('/', bookRoutes);


app.listen(3000, () => console.log('Server running on http://localhost:3000'));