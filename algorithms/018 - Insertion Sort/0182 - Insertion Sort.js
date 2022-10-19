function insertionSort(array) {

    return array.reduce( (acc, b, i) => {
      if (i === 0){
        acc[0] = b;
      } else if ( acc.at(-1) > b) {
          let position = findPosition(acc, b);
          acc = [...insertInPosition(acc, b, position)];
      } else {
        acc.push(b);
      }
      return acc;
    }, []);
  }
  
  function findPosition(sortedArray, item){
    return sortedArray.reduce((acc, b, i) => b < item ? i + 1 : acc, 0);
  }
  
  function insertInPosition(array, item, targetPosition){
    return array.slice(0,targetPosition).concat([item]).concat(array.slice(targetPosition));
  }
  