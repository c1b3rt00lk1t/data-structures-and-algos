function majorityElement(array) {
    const acc = {};
  
    for (let i = 0; i < array.length; i++){
      if(!acc[array[i]]){
        acc[array[i]] = 1;
      } else {
        acc[array[i]] += 1;
      }
      if(acc[array[i]] > array.length / 2){
        return array[i];
      }
    }
    
  }