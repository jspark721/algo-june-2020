/*
Given a 2D array, print it in spiral form. See the following examples.
Examples:
Input:
    	1	   2   3   4
    	5	   6   7   8
    	9   10  11  12
    	13  14  15  16
Output:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
 
 
Input:
    	1   2   3   4  5   6
    	7   8   9  10  11  12
    	13  14  15 16  17  18
Output:
1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11


*/

const printInSpiral = (arr) => {
  if (arr.length === 0) return -1;

  let top = 0;
  let bottom = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  //initialize a direction, if 0, it's going right
  //if 1, it's going down
  //if 2, it's going left
  //if 3, it's going up
  let direction = 0;

  while (top <= bottom && left <= right) {
    if (direction == 0) {
      for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++; //move top pointer down, so add 1
    } else if (direction == 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--; //move right pointer to the left
    } else if (direction == 2) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    } else if (direction == 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }
  return result;
};

console.log(
  printInSpiral([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
