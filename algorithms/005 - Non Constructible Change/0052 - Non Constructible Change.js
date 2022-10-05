function nonConstructibleChange(coins) {
    //Declarative solution
    //O(NlogN) time / O(1) space
    return 1 + coins
      .sort((a,b) => a - b)
      .reduce((acc, b) => b > acc + 1 ? acc : acc + b, 0)
  }
  
