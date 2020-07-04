/*
Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.

*/

/* Questions:
are we passing in an extra argument as an element to find the element?
what element are we finding? the extra argument we're passing right?
what do we return? the index where the element is located?
or do we return how many times the array was rotated?

I will assume that we will pass in an argument element to find that value and return its index

Time Complexity: O(n);
Space Complexity: O(1); not using any extra space than what was given
*/

const findElement = (arr, element) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

console.log(findElement([4, 5, 8, 10, 1, 2, 3], 8)); // return 2

// we can do better and do this in O(log n) running time using binary search
// the array is originally sorted but with the rotations, we can split the array in half and one side will always be sorted, no matter how many times the array has been rotated
// when we divide the array in half, we can check which side remained sorted after the rotations
/*
example: [4,5,8,10,1,2,3] 
after we divide the array in half [4,5,8][10,1,2,3]
so if one side is sorted, in this case, the left, we can check if the element is on that side of the array first, if not, it's on the other side(the right)
*/

const findElementBinarySearch = (arr, element) => {
  //edge case
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`left ${left}, right ${right}, mid ${mid}`);
    //return the mid index if it matches the element
    if (arr[mid] === element) {
      return mid;
    }
    //after dividing down the middle, check which side is sorted

    //check if left is sorted -- if the value at arr[left] is less than the value at arr[mid], then the left side is sorted
    if (arr[left] <= arr[mid]) {
      console.log(`left array is sorted`);
      if (arr[left] <= element && element <= arr[mid]) {
        //element is in the left side
        right = mid - 1;
      } else {
        //element is in the right side
        left = mid + 1;
      }
    } else {
      // the right side is sorted
      if (arr[right] >= element && element >= arr[mid]) {
        //element is on the right side
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  //the element was not found
  return -1;
};

console.log(findElementBinarySearch([4, 5, 8, 10, 1, 2, 3], 8));
console.log(findElementBinarySearch([4, 5, 8, 10, 1, 2, 3], 2));
console.log(findElementBinarySearch([8, 9, 10, 5, 7], 5));
