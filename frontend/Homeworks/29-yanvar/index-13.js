function namedd(a,b,c) {
  if (a >= b && b >=c) {
  return c
} else if (b >= a && c >= a) {
  return a
} else {
  return b
}
}
console.log(namedd(8,5,11));