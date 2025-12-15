const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', todoRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});