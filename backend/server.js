const express = require('express')
const app = express()
const port = 5000

app.use(express.static('build'))

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})