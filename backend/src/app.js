require('dotenv').config()
const aiRoutes = require('./routes/ai.router')
const cors = require('cors')
const helmet = require('helmet');

const express = require('express');

const app = express()


app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", 'https://ai-code-reviewer-5jcc.onrender.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'"],
    },
  },
}));


app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.use('/ai',aiRoutes)

module.exports = app;