// Time: O(Nlog(N))
// Space: O(1)

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);
    
    let i = 0;
    let j = 0;
    const acc = {one: null, two: null, min: Infinity};
    
    while ( i < arrayOne.length && j < arrayTwo.length){
      const current = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (current < acc.min){
        acc.min = current;
        acc.one = arrayOne[i];
        acc.two = arrayTwo[j];
      }
      arrayOne[i] < arrayTwo[j] ? i++ : j++;    
    }
    return [acc.one, acc.two];
    
  }
  