/*
Given an unsorted array of integers, find a subarray which adds to a given number. If there are more than one subarrays with sum as the given number, print any of them.
Examples:
Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Ouptut: Sum found between indexes 2 and 4
 
Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
Ouptut: Sum found between indexes 0 to 3
 
Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
Ouptut: No subarray with given sum exists

so for this problem, we want to create a hashmap to store key value pair 
and keep a memory of the current sum of the array as we are iterating through
from start to end

at each current sum, we are going to check if the sum equals the sum we are looking for,
then we will break out of the loop, initialize the start to 0 and end variable to i
and then we will print out the statement

if not, then we keep going through the for loop and check 
if the hashtable already has the value of currentSum - sum, then 
we're going to update the start variable to the value at that hashtable + 1
and end variable will equal to the current index we are at and we can break out of the loop

if the currentsum doesn't exist in the hashtable yet, we are going to add it 
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
      console.log(`start: ${start} end: ${end}`);
      break;
    }
    //if value is not present, add it to hash table
    hash[currentSum] = i;
    console.log(hash);
  }
  if (end === -1) {
    return "No subarray with given sum exists";
  }
  return `Sum found between indexes ${start} and ${end}`;
};

console.log(findContinousSubArray([1, 4, 20, 3, 10, 5], 33));
console.log(findContinousSubArray([10, 2, -2, -20, 10], -10));
