const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const showRoutes = require('./routes/showRoutes');
const ticketRoutes = require('./routes/ticketRoutes');


const app = express();
connectDB();


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.use('/', movieRoutes);
app.use('/shows', showRoutes);
app.use('/ticket', ticketRoutes);


app.listen(3000,()=>console.log('Server on http://localhost:3000'));