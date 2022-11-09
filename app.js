const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'))

const entries = [
    {'head': 'Post 1', 'text': 'djksbgjkagbdgjkls'},
     {'head': 'Post 2', 'text': 'ajsdgj;dsgb'},
    ]

app.get('/', (req, res) => {
    res.render('index', {
        entries: entries
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/')

app.listen(3000);