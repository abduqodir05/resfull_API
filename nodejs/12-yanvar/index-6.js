const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {

  let users = fs.readFileSync('users6.json', 'utf8')

  users = JSON.parse(users);
  res.send(users);
})

app.listen(8080, () => {
  console.log("working...");
})