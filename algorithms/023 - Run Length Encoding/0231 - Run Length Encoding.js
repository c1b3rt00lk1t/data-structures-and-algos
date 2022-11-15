function runLengthEncoding(string) {
    let counter = 1;
    let output = '';
    for(let i = 0; i < string.length; i++){
      if(string[i] === string[i + 1] && counter < 9 ){
        counter++;
      } else {
        output = `${output}${counter}${string[i]}`;
        counter = 1;
      }    
    }
  
    return output;
  }