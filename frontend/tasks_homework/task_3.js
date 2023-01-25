const logOnlyEven = function (arr) {
  for (let l = 0; l < arr.length; l++) {
    const element = arr[l];
    
    if (element % 2 == 0) {
      console.log(`${element} is even`);
    }
  }
}
const arr123 = [34, 67, 12, 16, 89, 98, 32]
console.log(logOnlyEven(arr123));