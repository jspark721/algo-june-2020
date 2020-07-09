/*
Given an unsorted array of integers, find a subarray which adds to a given number. If there are more than one subarrays with sum as the given number, print any of them.
Examples:
Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Ouptut: Sum found between indexes 2 and 4
 
Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
Ouptut: Sum found between indexes 0 to 3
 
Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
Ouptut: No subarray with given sum exists

*/

/*

Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.
Examples :
Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
20+3+10 = 33
 
Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
Output: Sum found between indexes 1 and 4
4 + 0 + 0 + 3 = 7 

Input: arr[] = {1, 4}, sum = 0
Output: No subarray found

we can check every subarray and see if that subarray equals the given sum, run two nested loops so this would be O(n^2) running time

so instead, we can keep a memory of current sum and initialize a start value and iterate through the array adding all the values and checking the current sum with the sum we need to find. 

this will have time complexiy of O(n) and space complexity of O(1)
*/

const findContinousSubArray = (arr, sum) => {
  if (arr.length === 0) {
    return -1;
  }

  let currentSum = 0;
  let start = 0; //starting at 0 index
  let end = -1; //ending index is not pointing anywhere yet
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    //iterate through the array and keep a value of the currentSum
    currentSum += arr[i];

    //check whether currentSum equals sum then it means the subarray is starting from index 0 to wherever the i is currently
    if (currentSum - sum === 0) {
      start = 0;
      end = i;
      break;
    }

    //if hash table already has the value, it means we already have the subarray with the sum, so we can break
    if (hash[currentSum - sum]) {
      start = hash[currentSum - sum] + 1;
      end = i;
      break;
    }
    //if value is not present, add it to hash table
    hash[currentSum] = i;
    console.log(hash);
  }
  if (end === -1) {
    return 'No subarray with given sum exists';
  }
  return `Sum found between indexes ${start} and ${end}`;
};

console.log(findContinousSubArray([1, 4, 20, 3, 10, 5], 33));
console.log(findContinousSubArray([10, 2, -2, -20, 10], -10));
