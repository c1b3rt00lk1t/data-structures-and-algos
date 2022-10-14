// Time: O(N)
// Space: O(d)
function productSum(array, depth = 1) {
    return array.reduce((acc, b) => typeof(b) === 'number' ? acc + b : acc + (depth + 1) * productSum(b, depth + 1),0);
  }
  