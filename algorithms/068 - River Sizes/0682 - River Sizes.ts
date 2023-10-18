export function riverSizes(matrix: number[][]) {
  type Cell = [number, number] | null;
  const visitedCells: Record<string, boolean> = {};
  let currentSize = 0;
  const sizes: number[] = [];

  function checkAdjacentCells(initialCell: Cell) {
    // entry cell
    const [i, j] = initialCell!;

    // if the cells has been already visited, return
    if (visitedCells[`${i}${j}`]) return;
    // else, check out as visited
    visitedCells[`${i}${j}`] = true;

    // if the cell is 1, check adjacent cells
    if (matrix[i][j] === 1) {
      // increase current river size
      currentSize++;

      // calculated adjacent cell, if they exist
      const upper: Cell = i < matrix.length - 1 ? [i + 1, j] : null;
      const lower: Cell = i > 0 ? [i - 1, j] : null;
      const right: Cell = j < matrix[0].length ? [i, j + 1] : null;
      const left: Cell = j > 0 ? [i, j - 1] : null;

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
