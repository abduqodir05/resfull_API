const express = require("express")

const app = express()

app.use(express())

app.get('/server', (req,res) => {
  res.send("server muvaffaqqiyatli ishga tushdi")
})

app.listen(3500, ()=> {
  console.log("working...");
})