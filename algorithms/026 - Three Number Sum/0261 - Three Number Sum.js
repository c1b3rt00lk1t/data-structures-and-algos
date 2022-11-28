// Time: O(N^2)
// Space: O(N)

function threeNumberSum(array, targetSum) {
    const result = [];
    array.sort((a,b) => a - b);
  
    for (let i = 0; i < array.length; i++){
      let leftPointer = i + 1;
      let rightPointer = array.length - 1;
      while (leftPointer < rightPointer){
        let currentSum = array[i] + array[leftPointer] + array[rightPointer];
        if (currentSum === targetSum){
          result.push([array[i], array[leftPointer], array[rightPointer]]);
          leftPointer++;
          rightPointer--;
        } else if (currentSum < targetSum){
          leftPointer++;
        } else if (currentSum > targetSum){
          rightPointer--;
        }
      }
  
    }
  
    return result;
    
  }
  