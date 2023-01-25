
const express = require("express")

const app = express()

app.use(express())

app.listen(4000,() => {
  console.log("4000 portida server ishga tushirildi");
})