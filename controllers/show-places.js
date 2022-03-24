const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: "Angelo's",
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian Cuisine',
        pic: '/images/Angelos.jpg'
      }, {
        name: "Pierre's",
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'French Cuisine',
        pic: '/images/Pierres.jpg'
      }]
    res.render('places/index',{places}) 
  })

module.exports = router