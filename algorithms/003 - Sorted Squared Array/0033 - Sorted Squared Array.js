function sortedSquaredArray(array) {
    // O(n) complexity because it does not sort again the resulting array, using reduce
     return array.reduceRight((acc,b,i,arr) => {
          if (Math.abs(arr[acc.right]) > Math.abs(arr[acc.left])){
            acc.output[i] = Math.pow(arr[acc.right],2);
            acc.right--;
          } else {
            acc.output[i] = Math.pow(arr[acc.left],2);
            acc.left++;
          }
          return acc;
        }
        , {right: array.length - 1, left: 0, output: Array.from({length: array.length}, i => 0)}
        ).output
    
      
    }
    

    