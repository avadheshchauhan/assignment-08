// question 1

const arr = [1, 1, 4, 2, 2, 2, 3, 1];
let r = {};
arr.map((a) => (r[a] = (r[a] || 0) + 1));
var res = arr.find((a) => r[a] === 1);
console.log(res);

arr.map((a) => (r[a] = (r[a] || 0) + 1));

// question 2

const array = [1, 2, 3, 4, 5];
const position = 3;

const shiftArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(shiftArray(array, position));
