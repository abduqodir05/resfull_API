const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (request, response) => {
  const req_body = request.body;
  let branches = fs.readFileSync("branches.json", "utf8");
  branches = JSON.parse(branches);

  let filtered_branch = branches.find((el) => {
    if (el.login == req_body.login && el.password == req_body.password) {
      return true;
    }
  });
  console.log(filtered_branch);
  if (filtered_branch == undefined) {
    response.send({
      error: "Invalid user info",
      access: false,
    });
    return;
  } else {
    response.send({
      id: filtered_branch.id,
      name: filtered_branch.login,
      access: true,
    });
    return;
  }
});

app.post("/cars", (request, response) => {
  const req_body = request.body;

  let branches = fs.readFileSync("branches.json", "utf8");
  branches = JSON.parse(branches);

  let filtered_branch = branches.find((el) => {
    if (el.id == req_body.id) {
      return true;
    }
  });
  response.send(filtered_branch.cars)
  return
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
