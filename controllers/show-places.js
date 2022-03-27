const router = require('express').Router()
const places = require('../models/places.js')


/*
** Show all restaurants
*/
router.get('/', (req, res) => {
  res.render('places/index',{places}) 
})

/*
** Show new restaurant form
*/
router.get('/new', (req, res) => {
  res.render('places/new')
})

/*
** Show individual restaurant
*/
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id})  }
})

/* Show the page for editing a restaurant
*/
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id:id })
  }
})

/*
** Add the new restaurant to the DB
*/
router.post('/', (req, res) => {
  //console.log(places)
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
  /* Add to the end of the places array list and redirect user back to main rest list
  */
  places.push(req.body)
  res.redirect('/places')
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router