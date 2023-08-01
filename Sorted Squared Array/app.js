const arr = [-7, -5, -4, 3, 6, 8, 9];
let arr2 = [];

let s = 0;
let e = arr.length - 1;

for (let index = 0; index < arr.length; index++) {
  const i = arr.length - 1 - index;

  if (Math.abs(arr[s]) > Math.abs(arr[e])) {
    arr2[i] = arr[s] * arr[s];
    s++;
  } else {
    arr2[i] = arr[e] * arr[e];
    e--;
  }
}

console.log(arr2);
