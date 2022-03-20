require('dotenv').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Howdy world!!!')
})

app.get('*', (req, res) => {
    res.send('<h1>Dude - you screwed up!</h1>')
})

app.listen(process.env.PORT)