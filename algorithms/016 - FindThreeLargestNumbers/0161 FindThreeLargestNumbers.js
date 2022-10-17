// Time: O(N) -> by avoiding to sort the array we get less complexity (sorting would be O(Nlog(N)))
// Space: O(1) 
function findThreeLargestNumbers(array) {
    const {first, second, third} = array.reduce( 
      (acc, b) => {
             if( b > acc.first){
               acc.third = acc.second;
               acc.second = acc. first;
               acc.first = b;
             } else if (b > acc.second){
               acc.third = acc.second;
               acc.second = b;                 
             } else if (b > acc.third){
               acc.third = b;
             }
             return acc;    
      }
      ,{first:-Infinity, second:-Infinity, third:-Infinity})
  
    return [third, second, first];
  }