function sweetAndSavory(dishes, target) {
    dishes.sort((a,b) => a - b);
    let leftIndex = 0;
    let rightIndex = dishes.length - 1;
    const selectedPairing = [0,0];
    
    const isInitial = arr => arr[0] === 0 && arr[1] === 0;
    const sumIsLess = (arr1, arr2) => arr1[0] + arr1[1] < arr2[0] + arr2[1];
    const assignValues = (arr, val1, val2) => [arr[0],arr[1]] = [val1,val2];
    
    while (dishes[leftIndex] < 0 && dishes[rightIndex] > 0){
      // Early termination
      if(dishes[leftIndex] + dishes[rightIndex] === target){
        return [dishes[leftIndex], dishes[rightIndex]];
      } 
      // Above target
      else if (dishes[leftIndex] + dishes[rightIndex] > target){
        rightIndex--;
      } 
      // Potential pairing
      else {
        if (sumIsLess(selectedPairing, [dishes[leftIndex], dishes[rightIndex]]) || isInitial(selectedPairing)){
          assignValues(selectedPairing, dishes[leftIndex], dishes[rightIndex]);
        }
        leftIndex++;
      }    
    }
    return selectedPairing;
  }
  