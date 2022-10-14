const naiveStringSearch = (string, substring) => {
    return [...string].reduce((acc, b, i, arr) => {
         if(b === substring[0]){
             return acc + [...substring].reduce((acc,z,j) => {
                 if (arr[i+j] !== z) return 0;
                 return 1 * acc;
             },1)
         }
         return acc;
         
     },0)
     
 }
 
 
 const string = "omghjkomghjkomgomg";
 const substring = "omg";
 
 naiveStringSearch(string,substring);