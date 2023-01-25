const fs = require("fs");
const users_file = fs.readFileSync("users.json", "utf8");

let users = JSON.parse(users_file)

let count = 0 
for (let i = 0; i < users.length; i++) {
  count += users[i] 
}
console.log(count);