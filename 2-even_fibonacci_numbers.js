// FreeCodeCamp
// let fiBoEvenSum = (limit) => {
//   let sum = 0;

//   let a = 1;
//   let b = 2;

//   if (limit >= 2) {
//     sum = sum + b;
//   }

//   let c = 0;

//   while (c <= limit) {
//     c = a + b;
//     if (c % 2 === 0 && c <= limit) {
//       sum = sum + c;
//     }
//     a = b;
//     b = c;
//   }

//   return sum;
// };
// hackerRank
let fibonacciEvenSum = (n) => {
  let first = 0n,
    second = 1n,
    sum = 0n;

  while (first < n) {
    if (first % 2n === 0n) sum += first;

    let temp = first + second;
    [first, second] = [second, temp];
  }

  return sum.toString();
};

console.log("Result is", fibonacciEvenSum(1000)); // Result is 798
