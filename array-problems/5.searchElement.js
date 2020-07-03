/*

Search an element in an array where difference between adjacent elements is 1.
For example: arr[] = {8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3}

Search for 3 and Output: Found at index 7

*/

const searchElement = (arr, element) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      console.log(arr[i] - arr[i - 1], arr[i] - arr[i + 1]);
      if (
        (arr[i] - arr[i + 1] === 1 || arr[i] - arr[i + 1] === -1) &&
        (arr[i] - arr[i - 1] === 1 || arr[i] - arr[i - 1] === -1)
      ) {
        return i;
      }
    }
  }
  return -1;
};

console.log(searchElement([8, 7, 6, 7, 6, 5, 10, 3, 2, 3, 4, 3], 3)); // return 9
console.log(searchElement([10, 13, 11, 10, 9, 7], 10)); // return 3

// questions: what about array at 0 index or last index, you can't compare the adjacent numbers on both side because it's at the end, so do we return the 0th or the last index if it's adjacent element is only 1?

//if so, then if(arr[0] === element) { if(arr[0] - arr[1] === 1 || -1, then return 0)} and same goes for arr[arr.length-1]
