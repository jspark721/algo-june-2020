/*
Given an array and a number k where k is smaller than size of array, we need to find the k’th smallest element in the given array. It is given that ll array elements are distinct.
Examples:
Input: arr[] = {7, 10, 4, 3, 20, 15}
   	k = 3
Output: 7
 
Input: arr[] = {7, 10, 4, 3, 20, 15}
   	k = 4
Output: 10

*/

const findKthSmallest = (arr, k) => {
  if (arr.length === 0) {
    return -1;
  }

  //sort the array -- it takes O(n log n) using mergesort
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  //return k - 1th element because array indexes start at 0 not 1, so the 3rd smallest element will be at index 2, not 3
  return arr[k - 1];
};

console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 4));
