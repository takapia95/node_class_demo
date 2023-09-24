var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/static', express.static('public'));
app.set("view engine", "ejs")

app.get('/', function( req, res ){
    res.render('home.ejs', {name: null});
})

app.get('/path/:name', function( req, res ){
    let name = req.params.name;
    console.log(name);
    res.render('home.ejs', {name:name});
})

app.get('/query', function( req, res ){
    let name = req.query.name;
    let nameObject = {"name" : name}
    res.render('home.ejs', nameObject);
})

app.post('/create', (req, res) => {
    console.log(req.body.email);
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('started on port 3000')
}) 

//path param /home/45645456/...
//query param /home?foo=bar&bar=foo
// PUT & POST / CREATE & UPDATE