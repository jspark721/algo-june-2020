/*
A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i; Given a sorted array of distinct integers, write a method to find the magic index, if one exists in an array. FOLLOW UP: What if the values are not distinct?

*/

const magicIndex = (arr) => {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (mid === arr[mid]) {
      return mid;
    }
  }
  return -1;
};

//questions: do we return multiple magic index? or just return the first magic index?
//if the array does NOT have distinct numbers, the above algorithm will not work and can miss the magic index as we are comparing the mid index with the mid value and if there are duplicated numbers it would skip the magic index on the left side of the mid
//in this case, we would have to do a search on both left and right side
const magicIndexNotDistinct = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  function findMagicIndex(arr, start, end) {
    //base case
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === mid) return mid;

    //search left side
    let left = findMagicIndex(arr, start, mid - 1);
    if (left >= 0) return left; //if left returns as -1 that means no magic index was found

    //search right side
    let right = findMagicIndex(arr, mid + 1, end);
    return right;
  }
  return findMagicIndex(arr, start, end);
};

console.log(magicIndexNotDistinct([-20, 1, 1, 1, 3, 9, 20])); // 1
console.log(magicIndexNotDistinct([-20, 0, 1, 1, 3, 4, 5, 7, 20])); // 7
console.log(magicIndexNotDistinct([-11, -5, 2, 2, 3, 4, 4, 5, 8, 10])); // 2
