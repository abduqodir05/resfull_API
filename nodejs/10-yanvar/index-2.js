const fs = require("fs");
const text_file = fs.writeFileSync("a.txt", "goodbye", "utf8");

let text = text_file 

console.log(text);