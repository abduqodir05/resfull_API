const array = [ 'salom', true, undefined, 'hi', 34, '23']
const new_array =[]
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (typeof element === "string") {
    new_array.push(element)
  }
}
console.log(new_array);