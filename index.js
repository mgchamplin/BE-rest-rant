// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers & Routes
app.use('/addplace',    require('./controllers/add-place'))
app.use('/editdetails', require('./controllers/edit-details')) 
app.use('/showdetails', require('./controllers/show-details'))
app.use('/places',      require('./controllers/show-places'))

app.get('/', (req, res) => {res.render("home")})
app.get('*', (req, res) => {res.render('error404')})

app.listen(process.env.PORT) 






