function missingNumbers(nums) {
    const n = nums.length + 2;
    const missingNumbers = [];
   let first;
   
    if (!nums.length) return [1,2];
     
    nums.sort((a,b) => a - b);
     
    for (let i = 0; i < n; i++){
      if (i > nums.length - 1 || nums[i] !== i + 1){
         missingNumbers.push(i + 1);
         first = i;
         break;
      }
    }
    for (let j = first; j < n; j++){
      if (j > nums.length || nums[j] !== j + 2){
         missingNumbers.push(j + 2);
         break;
      }
    }
     return missingNumbers;
     
   }
   