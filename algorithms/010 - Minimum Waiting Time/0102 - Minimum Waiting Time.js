function minimumWaitingTime(queries) {
    return queries.sort((a,b) => a - b).reduce((acc,b,i,arr) => acc + b * (arr.length - i - 1), 0);
  }