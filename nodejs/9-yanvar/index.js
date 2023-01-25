const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");
let words = [];
let str = " ";
for (let el of text_file) {
  if (el != " ") {
    str += el;
  } else {
    if (str.length) {
      words.push(str);
      str = '';
    }
  }
  
}
console.log(words[0] );
