const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  res.render('places/index',{places}) 
})

router.post('/', (req, res) => {
  console.log(places)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router 

/*
const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// More code ...
let places = [{
  name: "Angelo's",
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Italian Cuisine',
  pic: '/images/italian.webp'
}, {
  name: "Ziba's",
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Mediterranean Cuisine',
  pic: '/images/ziba-special.png'
}]
*/