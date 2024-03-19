let sumOfSquareDiff = (n) => {
  let squaredSum = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    squaredSum = squaredSum + Math.pow(i, 2);
  }

  let sumSquared = Math.pow(sum, 2);

  return sumSquared - squaredSum;
};

console.log(sumOfSquareDiff(10));
