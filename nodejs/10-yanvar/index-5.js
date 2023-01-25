const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");
const js_file = fs.readFileSync('b.txt', "utf8");

if (js_file == text_file) {
  console.log("same");
}else {
  console.log('different');
}


