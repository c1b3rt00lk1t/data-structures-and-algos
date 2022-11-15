function runLengthEncoding(string) {
    return [...string].reduce((acc, b, i, arr) => {
      if (arr[i] === arr[i + 1] && acc.counter < 9){
        acc.counter++;
      } else {
        acc.output = `${acc.output}${acc.counter}${arr[i]}`;
        acc.counter = 1;
      }
      return acc;
    }, {output: '', counter: 1}).output;
  }
  