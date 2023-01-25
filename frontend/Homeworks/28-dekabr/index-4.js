function sumOfElementsWithZero(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(
  sumOfElementsWithZero([
    1, 3, 4, 5, 7, 8, 99, 8, 7, 65, 5, 23, 23, 23, 90, 70, 50, 30,
  ])
);
