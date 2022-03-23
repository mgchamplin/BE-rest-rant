const router = require('express').Router()

// GET /show-details
router.get('/', (req, res) => {
    res.send('Show place details') 
  })

module.exports = router