function isValidSubsequence(array, sequence) {
    return sequence.length === array.reduce( (acc, item) => item === sequence[acc] ? ++acc : acc, 0);
  }
  

  exports.isValidSubsequence = isValidSubsequence;