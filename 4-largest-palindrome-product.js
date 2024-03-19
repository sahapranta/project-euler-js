let isPalindrome = (string) => {
  string = string.toString();
  let backward = string.split("").reverse().join("");
  return string == backward;
};

function isProductOfThreeDigitNumbers(num) {
  for (let i = 100; i <= 999; i++) {
    if (num % i === 0 && num / i >= 100 && num / i <= 999) {
      return true;
    }
  }
  return false;
}

function largestPalindromeProduct(limit) {
  for (let i = limit - 1; i >= 10000; i--) {
    if (isPalindrome(i) && isProductOfThreeDigitNumbers(i)) {
      return i;
    }
  }
  return -1;
}

console.log(largestPalindromeProduct(800000));
