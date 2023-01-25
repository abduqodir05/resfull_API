const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/cars", (req, res) => {
  let cars = fs.readFileSync("cars.json", "utf8");

  cars = JSON.parse(cars);
  res.send(cars);
});

app.post("/cars", (req, res) => {
  const req_obj = req.body;

  let cars = fs.readFileSync("cars.json", "utf8");
  cars = JSON.parse(cars);
  cars.push({
    name: req_obj.name,
    price: req_obj.price,
  });
  
  fs.writeFileSync("cars.json", JSON.stringify(cars, null, 2), "utf8");
  res.send("added");
});

app.put("/cars", (req, res) => {
  const req_obj = req.body;

  let cars = fs.readFileSync("cars.json", "utf8");
  cars = JSON.parse(cars);

  for (let el of cars) {
    if (el.id == req_obj.id) {
      el.name = req_obj.name || el.name;
      el.price = req_obj.price || el.price;
    }
  }
  fs.writeFileSync("cars.json", JSON.stringify(cars, null, 2), "utf8");
  res.send("changed");
});

app.delete("/cars", (req, res) => {
  const req_obj = req.body;

  let cars = fs.readFileSync("cars.json", "utf8");
  cars = JSON.parse(cars);

  cars = cars.filter((el) => {
    if (el.id != req_obj.id) {
      return true;
    }
  });

  fs.writeFileSync("cars.json", JSON.stringify(cars, null, 2), "utf8");
  res.send("deleted");
});

app.listen(8080, () => {
  console.log("ishga tushdi...");
});
