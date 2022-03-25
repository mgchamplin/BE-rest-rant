const router = require('express').Router()

// GET /places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  res.send('POST places')
})

router.get('/', (req, res) => {
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
    res.render('places/index',{places}) 
  })

module.exports = router