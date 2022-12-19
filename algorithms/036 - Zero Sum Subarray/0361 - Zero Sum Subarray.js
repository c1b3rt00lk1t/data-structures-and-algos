function zeroSumSubarray(nums) {
    const hash = {"0":true};
    let prev = 0;
    
    for (let i = 0; i < nums.length; i++){
      if(hash[prev + nums[i]]) {
        return true;
      } else {
        hash[prev + nums[i]] = true;
        prev = prev + nums[i];
      }
    }
    
    return false;
  }