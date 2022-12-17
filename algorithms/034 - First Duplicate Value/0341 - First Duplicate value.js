function firstDuplicateValue(array) {

    const acc = {};
    for (let i = 0; i < array.length; i++){
      if (acc[array[i]]) return array[i];
      acc[array[i]] = true;
    }
    return -1;
   
  }
  