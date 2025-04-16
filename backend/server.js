const app = require('./src/app');
const port = process.env.PORT || 5173

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })