//Time: O(N)
// Space: O(N)

function isPalindrome(string) {
    const half = Math.floor(string.length/2);
    let acc = true;
    for (let i = 0 ; i < half ; i++){
      acc = acc && string.at(i) === string.at(-1 - i);
    }
    return acc;
  }