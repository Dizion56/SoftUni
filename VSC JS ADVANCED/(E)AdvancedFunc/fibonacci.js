function getFibonator() {
  let result = 0;
  let fib = 0;
  result = fib + (fib + 1);
  fib = result;
  return result;
}

let fib = getFibonator();
console.log(getFibonator()); // 1
console.log(getFibonator()); // 1
console.log(getFibonator()); // 2
console.log(getFibonator()); // 3
console.log(getFibonator()); // 5
console.log(getFibonator()); // 8
console.log(getFibonator()); // 13
