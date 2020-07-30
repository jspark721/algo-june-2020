/**
 * @param {number} n
 * @return {Array<Array<string>>}
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const results = [];

  placeQueens(0, n, [], results);

  return results;
};

const placeQueens = (row, n, colPlacements, results) => {
  if (row === n) {
    results.push(generateBoard(colPlacements, n));
    return;
  }

  for (let col = 0; col < n; col++) {
    colPlacements.push(col);

    if (isValid(colPlacements)) {
      placeQueens(row + 1, n, colPlacements, results);
    }

    colPlacements.pop();
  }
};

const isValid = (colPlacements) => {
  const currentRow = colPlacements.length - 1;

  for (let i = 0; i < currentRow; i++) {
    const colDistance = Math.abs(colPlacements[i] - colPlacements[currentRow]);
    const rowDistance = currentRow - i;

    if (colDistance == 0 || colDistance == rowDistance) {
      return false;
    }
  }
  return true;
};

const generateBoard = (colPlacements, n) => {
  const board = [];
  const totalItems = colPlacements.length;

  for (let row = 0; row < totalItems; row++) {
    let s = '';
    for (let col = 0; col < n; col++) {
      if (col == colPlacements[row]) {
        s += 'Q';
      } else {
        s += '-';
      }
    }
    board.push(s);
  }
  console.log(board);
  return board;
};

console.log(solveNQueens(4));
