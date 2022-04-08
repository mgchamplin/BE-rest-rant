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

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  console.log("GET /:id/edit")

  db.Place.findById(req.params.id)
  .then (place => {
      res.render("places/edit", {place})
  })
  .catch(err => {
    console.log('err1', err)
    res.render('error404')
})})


router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err2', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  console.log("PUT /:id")

  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
     res.redirect(`/places/${req.params.id}`)
  })
  .catch (err => {
    console.log('err3', err)
    res.render("error404")
  })
})

router.delete('/:id', (req, res) => {
  console.log("DELETE /:id")

  db.Place.findByIdAndDelete(req.params.id)
  .then (place => {
    res.redirect('/places')
  })
  .catch (err => {
    console.log('err',err)
    res.render("error404")
  })
})

router.delete('/:rid/comment/:cid', (req, res) => {
  console.log("DELETE /:id/comment/:id")
  console.log("PARAMS ARE: " + req.params)

  db.Comment.findByIdAndDelete(req.params.cid)
  .then (comment => {
    console.log("GREAT JOB!  comment=" + comment)

    db.Place.findById(req.params.rid)
    .then (place =>{
        console.log("PLACE IZ " + place.id)

        res.redirect(`/places/${place.id}`)
    })

  })
  .catch (err => {
    console.log('err9',err)
    res.render("error404")
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

router.post('/:id/comment', (req, res) => {
  console.log("POST /:id/comment")
  console.log("PLACE = " + req.params.id)
  req.body.rant = req.body.rant ? true : false;
  
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          console.log("Storing comment!")

          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          console.log("Failed Comment Create")

          res.render('error404')
      })
  })
  .catch(err => {
      console.log("Can't Find Place")
      res.render('error404')
  })
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router