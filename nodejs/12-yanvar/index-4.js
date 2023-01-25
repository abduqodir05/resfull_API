const express = require("express")

const app = express()

app.use(express())

app.get('/server', (req, res) => {

  res.send("4124 portida server muvaffaqqiyatli ishga tushirildi")
})
app.listen(4124, () => {
  console.log("working...");
})