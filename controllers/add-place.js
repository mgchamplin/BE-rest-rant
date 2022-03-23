const router = require('express').Router()

// GET /add-place
router.get('/', (req, res) => {
    res.send('Add a place') 
  })

module.exports = router