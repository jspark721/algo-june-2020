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

we can check every subarray and see if that subarray equals the given sum, 
run two loops so this would be O(n^2) running time

*/

const findContinousSubArray = (arr, sum) => {
  let currentSum = arr[0];
  let start = 0;

  for (let i = 1; i < arr.length; i++) {
    //add elements to currentSum
    currentSum += arr[i];

    //while the currentSum becomes larger than the sum, subtract the beginning of the array
    //value of start cannot exceed i
    while (currentSum > sum && start < i - 1) {
      currentSum = currentSum - arr[start];
      start++;
    }

    //if currentSum equals sum, then return
    if (currentSum === sum) {
      return `Sum found between indexes ${start} and ${i}`;
    }
  }
  return 'No subarray found';
};

console.log(findContinousSubArray([1, 4, 20, 3, 10, 5], 33));
console.log(findContinousSubArray([1, 4, 0, 0, 3, 10, 5], 7));
console.log(findContinousSubArray([1, 4], 0));
