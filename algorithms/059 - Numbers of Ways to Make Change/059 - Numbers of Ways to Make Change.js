function numberOfWaysToMakeChange(n, denoms) {
    const  ways = Array.from({length: n + 1}, (_,j) => j === 0 ? 1 : 0);
  
    for (let denom of denoms){
      for (let amount = 0; amount < ways.length; amount++){
        if (denom <= amount){
          ways[amount] = ways[amount] + ways[amount - denom];
        }
      }
    }
    return ways[n];
    
  }