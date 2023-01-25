const array = [ 11,'salom', true,52, undefined,'21', 'hi', 34,false, 23]
const new_array =[]
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (typeof element === "number") {
    new_array.push(element)
  }
}
console.log(new_array);