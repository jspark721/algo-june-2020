/*
Write a program to sort an array of 0's, 1's and 2's in ascending order

*/

const sortArray = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  //initialize all the zeroes, ones and two counts
  let zeroes = 0;
  let ones = 0;
  let twos = 0;
  let result = [];

  //count all the 0s, 1s and 2s
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes++;
    }
    if (arr[i] === 1) {
      ones++;
    }
    if (arr[i] === 2) {
      twos++;
    }
  }

  while (zeroes) {
    result.push(0);
    zeroes--;
  }
  while (ones) {
    result.push(1);
    ones--;
  }
  while (twos) {
    result.push(2);
    twos--;
  }

  return result;
};

console.log(sortArray([0, 2, 1, 2, 1, 2, 0, 0, 2, 1, 1]));
console.log(sortArray([1, 2, 2, 1, 0, 1]));
