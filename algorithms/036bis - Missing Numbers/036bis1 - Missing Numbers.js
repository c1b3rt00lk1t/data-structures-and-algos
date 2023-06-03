function missingNumbers(nums) {
    const n = nums.length + 2;
  
    const missingNumbers = [];
    let num1 = null;
    let num2 = null;
  
    // Find the two missing numbers
    for (let i = 1; i <= n; i++) {
      if (!nums.includes(i)) {
        if (num1 === null) {
          num1 = i;
        } else {
          num2 = i;
          break;
        }
      }
    }
  
    return [num1, num2].sort((a, b) => a - b);
  }