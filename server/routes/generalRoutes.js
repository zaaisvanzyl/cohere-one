const express = require('express')
const { cohereClassification } = require('../controllers/cohereController')

const router = express.Router()

// GET
router.get('/cohere', cohereClassification)

module.exports = router