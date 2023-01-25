const vowels = ["a", "i", "o", "u", "e"];

function replaceWithHashtag(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(vowels)) {
      newStr += '#'
    } else {
      newStr+= str[i]
    }
  }

  return newStr;
}

console.log(
  replaceWithHashtag(
    "this is string value that which should have vowels replaced to #"
  )
);
