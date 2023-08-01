const arr1 = [5, 1, 22, 25, 6, -1, 8, 10, 15, 88, 4, 75, 3];
const arr2 = [1, 6, -1, 10, 4, 3];

// MY code
const validateSubsequence1 = (array, sequence) => {
  let m2 = 0;
  array.forEach((item) => {
    if (item === sequence[m2] && m2 < sequence.length) {
      m2++;
    }
  });

  return m2 === arr2.length;
};

// While loop way
const validateSubsequence2 = (array, sequence) => {
  let m1 = 0;
  let m2 = 0;

  while (m1 < array.length && m2 < sequence.length) {
    if (array[m1] === sequence[m2]) m2++;
    m1++;
  }

  return m2 === arr2.length;
};

// For loop way
const validateSubsequence3 = (array, sequence) => {
  let m2 = 0;

  for (let m1 = 0; m1 < array.length && m2 < sequence.length; m1++) {
    if (array[m1] === sequence[m2]) m2++;
  }

  return m2 === arr2.length;
};

console.log(validateSubsequence1(arr1, arr2));
console.log(validateSubsequence2(arr1, arr2));
console.log(validateSubsequence3(arr1, arr2));
