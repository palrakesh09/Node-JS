const express = require('express');
const todoRoutes = require('./routes/todoRoutes');


const app = express();


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', todoRoutes);


app.listen(3000, () => console.log('Server running on http://localhost:3000'));