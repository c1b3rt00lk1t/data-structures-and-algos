function commonCharacters(strings) {
    const acc = {};
    for (let string of strings){
      const uniqueCharString = new Set(string);
      for (let char of uniqueCharString){
        acc[char] = acc[char] ? ++acc[char] : 1;
      }  
    }
  return Object.entries(acc)
               .filter(entry => entry[1] == strings.length)
               .map(entry => entry[0])

}
