let nthPrime = (n) => {
  let count = 0;
  let solution = 2;
  let latestPrime = 2;

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i < solution; i++) {
      if (solution % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      latestPrime = solution;
      count++;
    }

    if (solution === 2) {
      solution = 3;
    } else {
      solution += 2;
    }
  }

  return latestPrime;
};

nthPrime = (n) => {
  // Implement Sieve of Eratosthenes algorithm
  const limit = 110000; // 110000 upper limit
  const sieve = new Array(limit).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i * i < limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  
  let count = 0;
  for (let i = 2; i < limit; i++) {
    if (sieve[i]) {
      count++;
      if (count === n) {
        return i;
      }
    }
  }

  return -1;
};

console.log(nthPrime(6));
