function getNthFib(n, memo = {}) {
    if (n === 1){
      return 0;
    } else if (n === 2){
      return 1;
    } else if (memo[n]){
      return memo[n];
    } else {
      memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);
      return memo[n];
    }  
  }
  