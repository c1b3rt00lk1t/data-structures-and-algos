function minimumWaitingTime(queries) {
    // One-liner with reduce
    // Time: O(Nlog(N))
    // Space: O(1)
    return queries.sort((a,b) => a - b).reduce((acc,b,i,arr) => acc + b * (arr.length - i - 1), 0);
  }