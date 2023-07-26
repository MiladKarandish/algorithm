const numbers = [1, -4, 3, 6, 5, -1, 8, 11];
const target = 13;

// SOLUTION 2 --START //
console.time('Solution #1');
let res = null;

loop1: for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    const calcRes = numbers[i] + numbers[j];
    if (calcRes === target) {
      res = [numbers[i], numbers[j]];
      break loop1;
    }
  }
}
console.log(res);
console.timeEnd('Solution #1');
// SOLUTION 2 --END //

// SOLUTION 2 --START //
console.time('Solution #2');

const testedNumbers = [];
let res2 = null;

// numbers.every((number) => {
//   const calcRes = target - number;
//   if (testedNumbers.includes(calcRes)) {
//     res = [number, calcRes];
//     return false;
//   } else {
//     testedNumbers.push(number);
//     return true;
//   }
// });
numbers.forEach((number) => {
  const calcRes = target - number;
  if (testedNumbers.includes(calcRes)) {
    res2 = [number, calcRes];
  } else {
    testedNumbers.push(number);
  }
});
console.log(res2);
console.timeEnd('Solution #2');
// SOLUTION 2 --END //

// SOLUTION 3 --START //
console.time('Solution #3');
const sortedNumbers = [...numbers].sort((a, b) => a - b);

let lm = 0;
let rm = sortedNumbers.length - 1;
let res3 = null;
while (!res3) {
  const calcRes = sortedNumbers[lm] + sortedNumbers[rm];

  if (calcRes < target) {
    lm++;
  } else if (calcRes > target) {
    rm--;
  } else if (calcRes === target) {
    res3 = [sortedNumbers[lm], sortedNumbers[rm]];
    break;
  }
}

console.log(res);
console.timeEnd('Solution #3');
// SOLUTION 3 --END //
