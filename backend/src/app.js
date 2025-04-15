require('dotenv').config()
const aiRoutes = require('./routes/ai.router')

const express = require('express');

const app = express()

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.use('/ai',aiRoutes)

module.exports = app;