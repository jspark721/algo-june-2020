/*

write an algorithm such that if an element in an MxN matrix is 0, the entire row and column are set to 0

lets say we have a matrix

[[0,5,1,2],
[2,3,0,5],
[1,3,4,3]]

it will need to become 
[[0,0,0,0],
[0,0,0,0],
[0,3,0,3]]

*/

const setMatrixToZero = (matrix) => {
  if (matrix.length === 0) return -1;

  //to check if any of the values in first column or first row contains zero
  let firstColZero = false;
  let firstRowZero = false;

  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    if (matrix[0][i] === 0) {
      firstRowZero = true;
    }
  }

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
    }
  }

  //iterate over the matrix and for every matrix[i][j] that is 0, set the row and col value to 0
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  //now we need to update the values of the matrix except for first row and first col
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  //if firstrowzero and firstcolzero are true, set them all to 0
  if (firstRowZero) {
    for (let i = 0; i < col; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstColZero) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

let matrix = [
  [0, 5, 1, 2],
  [2, 3, 0, 5],
  [1, 3, 4, 3],
];

console.log(setMatrixToZero(matrix));

//time complexity: O(M) + O(N) + O(M*N) + O(M) + O(N) = O(2M) + O(2N) + O(M*N)
//space complexity: O(1) , not taking any extra space and updating values in place
