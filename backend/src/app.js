require('dotenv').config()
const aiRoutes = require('./routes/ai.router')
const cors = require('cors')
const helmet = require('helmet');

const express = require('express');

const app = express()

const path = require('path')


app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", 'https://ai-code-reviewer-bzz4.onrender.com/ai/get-review'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'"],
    },
  },
}));


app.use(cors())
app.use(express.json())

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all for frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/ai',aiRoutes)

module.exports = app;