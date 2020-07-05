/*

Given an array of numbers, split the array into two where one array contains the sum of n-1 numbers and the other array with all the n-1 elements.

arr = [1,3,5,10,15] sum of the array = 34
n = 5
n - 1 = 4 
sum of n-1 numbers just means the whole array as n - 1 means 4 index since arrays start at index 0

input: array
output: two arrays == [[34], [1,3,5,10,15]] ??

do we return a nested array? or two separate arrays?


questions: is the array sorted? are the numbers distinct? can there be duplicates?
is this asking to split the array so it has the same sum on each side?
*/

const splitArray = (arr) => {
  if (arr.length === 0) {
    return -1;
  }

  let newArray = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  newArray.push([sum]);
  newArray.push(arr);

  return newArray;
};

console.log(splitArray([1, 3, 5, 10, 15])); // return [[34],[1,3,5,10,15]]
console.log(splitArray([2, 5, 3]));
