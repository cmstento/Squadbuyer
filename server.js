var expressHandlebars = require ('express-handlebars')
var express = require("express")
var fetch = require('isomorphic-fetch')
var bodyParser = require('body-parser')

var campaignRouter = require('./controllers/campaign_controller')
var userRouter = require('./controllers/user_controller')

// Set up the app
var app = express();
var handlebars = expressHandlebars.create({})

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("./public"))

// Api routes
app.use('/api/campaigns', campaignRouter)
app.use('/api/users', userRouter)


// HTML routes
app.get('/', function(req,res) {
  fetch('http://localhost:8080/api/campaigns')
    .then(response => response.json())
    .then(campaigns => {
      fetch('http://localhost:8080/api/users/1')
        .then(response => response.json())
        .then(user => res.render('index', { campaigns: campaigns, user: user } ))
    })
})

app.get('/user', function(req,res) {
  fetch('http://localhost:8080/api/users/1/campaigns')
    .then(response => response.json())
    .then(campaigns => {
      fetch('http://localhost:8080/api/users/1')
        .then(response => response.json())
        .then(user => res.render('layouts/user', { campaigns: campaigns, user: user } ))
    })
})


var PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
