const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "/images/utensils.png"
  }

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
          let message = 'Validation Error: '
          for (var field in err.errors) {
              message += `${field} was ${err.errors[field].value}. `
              message += `${err.errors[field].message}`
          }
          console.log('Validation error message', message)
          res.render('places/new', { message })
      }
      else {
          res.render('error404')
      }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


//const router = require('express').Router()
//const places = require('../models/places.js')


//** Show all restaurants

//router.get('/', (req, res) => {
//  console.log("GET at /")
//  res.render('places/index',{places}) 
//})

/*
** Show new restaurant form
*/
//router.get('/new', (req, res) => {
//  console.log("GET at /new")
//
//  res.render('places/new')
//})

/*
** Show individual restaurant
*/
//router.get('/:id', (req, res) => {
//  console.log("GET at /:id")

//  let id = Number(req.params.id)
//  if (isNaN(id)) {
//    res.render('error404')
//  }
//  else if (!places[id]) {
//    res.render('error404')
//  }
//  else {
//    res.render('places/show', { place: places[id], id})  }
//})

/* Show the page for editing a restaurant
*/
//router.get('/:id/edit', (req, res) => {
//  console.log("GET at /:id/edit")
//
//  let id = Number(req.params.id)
//  if (isNaN(id)) {
//      res.render('error404')
//  }
//  else if (!places[id]) {
//      res.render('error404')
//  }
//  else {
//    res.render('places/edit', { place: places[id], id:id })
//  }
//})

/*
** Add the new restaurant to the DB
*/
// router.post('/', (req, res) => {
//   console.log("POST at /")
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   /* Add to the end of the places array list and redirect user back to main rest list
//   */
//   places.push(req.body)
//   res.redirect('/places')
// })

/* Process the put request -> from editing the restaurant data back into the DB

router.put('/:id', (req, res) => {
  console.log("PUT at /:id")

  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

router.delete('/:id', (req, res) => {
  console.log("Delete at /:id")

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
*/