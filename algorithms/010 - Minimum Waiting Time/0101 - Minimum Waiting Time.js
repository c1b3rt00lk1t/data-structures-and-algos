function minimumWaitingTime(queries) {
    // Time: O(Nlog(N))
    // Space: O(1)
    return queries.sort((a,b) => a - b).reduce((acc,b,i,arr) => {
      if( i > 0 ){
        acc.last = acc.last + arr[i - 1];
        acc.total = acc.total + acc.last;
      }
      return acc;
    },{total: 0, last: 0}).total
  }
  