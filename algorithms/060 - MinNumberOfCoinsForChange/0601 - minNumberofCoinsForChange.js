function minNumberOfCoinsForChange(n, denoms) {
    const nums = Array.from({length: n + 1}, (_,i) => i === 0 ? 0 : Infinity);
  
    for (let denom of denoms){
      for (let amount = 0; amount < nums.length; amount++){
         if (denom <= amount){
             nums[amount] = Math.min(nums[amount], 1 + nums[amount - denom]);
         } 
      }
    }
    return nums.at(-1) !== Infinity ? nums.at(-1) : -1;
  }