const router = require('express').Router()

// GET /edit-details
router.get('/', (req, res) => {
    res.send('Edit place details') 
  })

module.exports = router