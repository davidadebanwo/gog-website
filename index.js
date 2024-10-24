const express = require("express");
const ejs = require('ejs');

const app = express();

app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about')
})

const PORT = 2000;
app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));