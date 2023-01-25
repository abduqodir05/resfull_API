const express = require("express")

const app = express()

app.use(express())

app.listen(5000,() => {
  console.log("5000 portida server ishga tushirildi");
})