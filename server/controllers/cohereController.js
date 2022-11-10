const mongoose = require('mongoose')

const cohereClassification = async (req, res) => {
    res.status(200).json({ message: 'cohere classification' })
}

module.exports = {
    cohereClassification
}