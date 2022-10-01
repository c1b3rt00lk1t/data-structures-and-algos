function nonConstructibleChange(coins) {
    // Imperative solutions
    //O(NlogN) time / O(1) space
    coins.sort((a,b) => a - b);
    if ( coins.length === 0 || coins[0] > 1 ){
      return 1;
    } 
    
    let acc = 0;
    for (let i = 0; i < coins.length ; i++){
      acc += coins[i];
      if( coins[i + 1] > acc + 1 ){
        break;
      } 
    }
    return acc + 1;
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;