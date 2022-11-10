require('dotenv').config()

const mongoose = require('mongoose')
const generalRoutes = require('./routes/generalRoutes')


const express = require('express')

const cors = require('cors')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())

// routes
app.use('/api', generalRoutes)


// listen for requests
app.listen(4006, () => {
    console.log('listening on port 4006')
    app.get('/', (req, res) => {
        res.send('hello to API')
    })
})