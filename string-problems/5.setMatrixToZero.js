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

  //to check if any of the values in first column (col0) is zero
  let col0 = 1;
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      //if any of the rows columns are zero, set col0 to zero
      col0 = 0;
    }
    //now start from 2nd column/ index 1, and check if any items are zeroes and set it to zero if it is
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        console.log(matrix[i][j], matrix);
        matrix[i][j] = 0;
      }
    }
    if (col0 === 0) {
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
