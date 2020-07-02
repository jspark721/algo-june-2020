/* Given an array that contains numbers from 1 to n-1 and exactly 1 duplicate, find that duplicate */

// since we know that there is only one duplicate
// numbers are from 1 to n - 1 (where n is the length of the array), we can use a calculation of (n*n-1)/2 to get the duplicate through computation

//this will take O(n) time with no extra space, space complexity will be O(1)

const findDuplicate = (arr) => {
  if (arr.length === 0) return -1;

  let n = arr.length;
  let sum = 0;
  //computation of adding all the single numbers
  let sumOfSingleNumbers = Math.floor((n * (n - 1)) / 2);

  //get the sum of the whole array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - sumOfSingleNumbers;
};

console.log(findDuplicate([1, 2, 3, 4, 4, 5, 6])); // 4
console.log(findDuplicate([4, 2, 5, 5, 1, 3])); // 5
console.log(findDuplicate([1, 2, 4, 1, 3, 5, 6, 7, 8])); // 1
