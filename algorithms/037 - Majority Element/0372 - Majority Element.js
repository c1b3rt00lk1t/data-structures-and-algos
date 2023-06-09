function majorityElement(array) {
    return array.reduce((acc, b) => {
      if(typeof acc === 'number') return acc;
      if(!acc[b]){
        acc[b] = 1;
      } else {
        acc[b] += 1;
      }
      if(acc[b] > array.length / 2){
        return b;
      } else {
        return acc;
      }
    }, {})
  }