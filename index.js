require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places',      require('./controllers/show-places'))
app.use('/addplace',    require('./controllers/add-place'))
app.use('/editdetails', require('./controllers/edit-details'))
app.use('/showdetails', require('./controllers/show-details'))


app.get('/', (req, res) => {res.render("home")})
app.get('*', (req, res) => {res.render('error404')})

app.listen(process.env.PORT) 