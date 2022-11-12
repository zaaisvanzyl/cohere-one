const express = require('express')
const { cohereClassification } = require('../controllers/baseController')

const router = express.Router()

// GET
router.get('/cohere', cohereClassification)

module.exports = router