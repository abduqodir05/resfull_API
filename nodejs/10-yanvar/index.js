const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");
let num = 0 
for (let i = 0; i < text_file.length; i++) {
  num = text_file.length
}
console.log(num);
