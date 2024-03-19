let smallestMultiple = (number) => {
  let solution;
  let potentialSolution = number;
  let unsolved = true;

  while (unsolved) {
    for (let i = 1; i <= number; i++) {
      if (potentialSolution % i !== 0) {
        break;
      } else if (i === number) {
        solution = potentialSolution;
        unsolved = false;
      }
    }

    potentialSolution = potentialSolution + 1;
  }

  return solution;
};

console.log(smallestMultiple(10));
