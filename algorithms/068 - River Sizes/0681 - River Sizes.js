function riverSizes(matrix) {
  const visitedCells = {};
  let currentSize = 0;
  const sizes = [];

  function checkAdjacentCells(initialCell) {
    // entry cell
    const [i, j] = initialCell;

    // if the cells has been already visited, return
    if (visitedCells[`${i}${j}`]) return;
    // else, check out as visited
    visitedCells[`${i}${j}`] = true;

    // if the cell is 1, check adjacent cells
    if (matrix[i][j] === 1) {
      // increase current river size
      currentSize++;

      // calculated adjacent cell, if they exist
      const upper = i < matrix.length - 1 ? [i + 1, j] : null;
      const lower = i > 0 ? [i - 1, j] : null;
      const right = j < matrix[0].length ? [i, j + 1] : null;
      const left = j > 0 ? [i, j - 1] : null;

      // check adjacent cells
      upper && checkAdjacentCells(upper);
      lower && checkAdjacentCells(lower);
      right && checkAdjacentCells(right);
      left && checkAdjacentCells(left);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visitedCells[`${i}${j}`]) continue;
      if (matrix[i][j] === 0) {
        visitedCells[`${i}${j}`] = true;
      } else {
        checkAdjacentCells([i, j]);
        sizes.push(currentSize);
        currentSize = 0;
      }
    }
  }

  return sizes;
}

// Do not edit the line below.
module.exports = riverSizes;
