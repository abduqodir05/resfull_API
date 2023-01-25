const numbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element % 2 == 0) {
      console.log(`${element} is even`);
    }
  }
}
const justEvens = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(numbers(justEvens));