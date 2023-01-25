const funksiya = function (arr) {
  let sum = 0;
  for (let l = 0; l < arr.length; l++) {
    sum += arr[l];
  }
  return sum;
};
console.log(funksiya([2, 3, 9]));
