function getNthFib(n) {
    let prev1 = 1;
    let prev2 = 0;
    let curr = 0;
    for (let i = 1; i <= n; i++){
      if (i === 1 ){
          curr = 0;
      } else if (i === 2){
          curr = 1;
      } else {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
      }
      console.log(n,i,curr)
    }
  
    return curr;
  }