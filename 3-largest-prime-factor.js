// Quotient Concept
let largestPrimeFactor = (number) => {
  let latestDivisor = 2;
  let quotient = number;

  while (quotient % 2 === 0) {
    latestDivisor = 2;
    quotient = quotient / 2;
  }

  let divisor = 3;
  let maxDivisor = Math.sqrt(quotient);

  while (quotient > 1 && divisor <= maxDivisor) {
    while (quotient % divisor === 0) {
      quotient = quotient / divisor;
      latestDivisor = divisor;
    }
    divisor = divisor + 2;
    maxDivisor = Math.sqrt(quotient);
  }

  if (quotient > 1) {
    latestDivisor = quotient;
  }

  return latestDivisor;
};

console.log(largestPrimeFactor(13195)); // 29
