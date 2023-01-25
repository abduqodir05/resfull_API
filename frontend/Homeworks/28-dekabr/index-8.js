const numbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element % 2 == 0) {
      console.log(`${element} is even`);
    }
  }
}
const justEvens = [ 12, 62, 7, 18, 9, 15, 19 ] 
console.log(numbers(justEvens));