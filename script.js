// question 1

const arr = [1, 1, 4, 2, 2, 2, 3, 1];
let r = {};
arr.map((a) => (r[a] = (r[a] || 0) + 1));
var res = arr.find((a) => r[a] === 1);
console.log(res);

arr.map((a) => (r[a] = (r[a] || 0) + 1));

// question 2

const shiftArray = (arr, x) => {
  let newArr = [];
  console.log();
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i < x) {
      let arrIndex = arr.length - 1 - i;
      newArr[i] = arr[arrIndex];
    } else {
      let arrIndex = i - x;
      newArr[i] = arr[arrIndex];
    }
  }
  return newArr;
};

console.log(shiftArray([1, 2, 3, 4, 5], 2));
