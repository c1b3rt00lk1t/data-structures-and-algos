function twoNumberSum(array, targetSum) {
    // Sorting the array and using two pointers
    array.sort( (a,b) => a - b);
    let Left = 0;
    let Right = array.length - 1;
  
    while (Left < Right){  
      if (array[Left] + array[Right] === targetSum){
        return [array[Left], array[Right]];
      } else if (array[Left] + array[Right] > targetSum ){
        Right--;
      } else if (array[Left] + array[Right] < targetSum){
        Left++;
      }
    }
  
    return [];
    
  }
  
