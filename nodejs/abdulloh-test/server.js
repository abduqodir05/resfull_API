const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  let products = fs.readFileSync('products.json','utf8')
  products = JSON.parse(products)

  res.send(products)
});

app.post("/orders", (req, res) => {
  const body = req.body;

  const filteredOrders = orderedProducts.filter((order) => order.count > 0);
  fs.writeFileSync("orders.json",JSON.stringify(filteredOrders, null, 2),"utf8")
  res.send(filteredOrders)
  
  // write to file filteredOrders
  // and send it in response
});

app.listen(8080, () => {
  console.log("working...");
});
