const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }));


const entries = [
    {
        'head': 'Post 1', 
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt laoreet urna sed porttitor. Phasellus feugiat lorem dui, nec varius purus cursus eu. Quisque sapien elit, finibus nec massa eget, maximus condimentum dolor. Nunc vel mattis neque. Nulla ut turpis ut odio ultricies mattis. Integer quis pellentesque urna, at placerat neque. In pellentesque, augue id suscipit vestibulum, tellus sem feugiat urna, ut pellentesque sem orci et lectus. Curabitur ut malesuada ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus rutrum arcu vitae semper pharetra. Sed varius justo vitae nisl ultrices feugiat. Cras egestas ligula at nisi mattis rhoncus. Maecenas vitae erat sapien. Curabitur tincidunt placerat luctus.'
    },

    {
        'head': 'Post 2', 
        'text': 'Nullam in cursus magna. Nullam mollis est ac metus rutrum, non fringilla turpis ullamcorper. Quisque dignissim elit vitae lectus sagittis, et facilisis sapien rutrum. Integer aliquam felis mauris, non faucibus tellus ultricies ac. Donec interdum bibendum tristique. Praesent viverra ornare imperdiet. Sed ligula elit, congue a fringilla ut, mollis et diam. Integer gravida, eros et semper tempor, elit diam ullamcorper diam, sit amet vulputate nulla libero dictum dolor. Vivamus ornare eget justo vel aliquet. Etiam varius eget massa in volutpat. Nam dignissim tristique ex, vitae molestie eros tempor ut. Aenean non eros ac felis tincidunt lobortis aliquam nec eros. Cras sed libero turpis. Pellentesque luctus laoreet arcu, in aliquam est eleifend in.'
    },

    {
        'head': 'Post 3',
        'text': 'Vestibulum at efficitur arcu, faucibus ultricies metus. Duis efficitur dolor vitae ligula porta ullamcorper. Donec in metus maximus, rutrum orci sit amet, ultricies magna. Sed at interdum risus, vel convallis felis. Sed at vestibulum metus. Nulla nisi tortor, varius sit amet mi non, aliquam ornare nibh. Curabitur pretium maximus convallis. Nulla sed rutrum massa.'
    },

    {
        'head': 'Post 4',
        'text': 'Vivamus ac dolor eget ligula posuere consectetur. Phasellus suscipit metus neque, quis finibus diam luctus in. Pellentesque ultricies rhoncus aliquet. Aliquam mattis viverra ex eget ornare. Sed varius mi eu nibh cursus, a lacinia lectus bibendum. Maecenas auctor nisl sed ligula suscipit, sit amet molestie ante pellentesque. Quisque tempus nunc ac elit imperdiet, vel congue tellus pretium. Curabitur laoreet ante sed facilisis facilisis. Suspendisse potenti. Etiam dignissim et nibh eu bibendum. Donec ut egestas velit. Phasellus dui massa, tempor et mi a, tempor dignissim sapien. Donec tellus elit, lobortis quis sem in, consequat dictum eros.'
    }

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

app.get('/compose', (req, res) => {
    res.render('compose')
})

app.post('/compose', (req, res) => {
    let newHead = req.body.head;
    let newText = req.body.text;
    
    let newEntry = {'head': newHead, 'text': newText}

    entries.push(newEntry)
    res.redirect("/")
})

app.listen(3000);