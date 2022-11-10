const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    fs.readFile('posts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
    
        let entries = JSON.parse(data);
        res.render('index', {
            title: "Home",
            entries: entries
        })    
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact"
    })
})

app.get('/compose', (req, res) => {
    res.render('compose', {
        title: "Compose"
    })
})

app.get('/posts/:id', (req, res) => {

    fs.readFile('posts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        
        let entries = JSON.parse(data);
        entries.forEach((post, index) => {
            if (post.id === req.params.id) {
                res.render('posts', {
                    title: entries[index].head,
                    entries: [entries[index]]
                })    
            }
        })
    });
})

app.post('/compose', (req, res) => {
    let newHead = req.body.head;
    let newText = req.body.text;
    let newId = newHead.replace(/\s+/g, '-').toLowerCase();
    console.log(newId)
    let newEntry = {'id': newId,'head': newHead, 'text': newText}
    fs.readFile('posts.json', 'utf8', (err, data) => {
        let entries = JSON.parse(data);
        entries.push(newEntry);
        fs.writeFile('posts.json', JSON.stringify(entries), (err) => {
            console.log(typeof(err));
        }) 
    })
    res.redirect("/")
})

app.get('*', function(req, res){
    res.status(404).send('what???');
  });

app.listen(3000);