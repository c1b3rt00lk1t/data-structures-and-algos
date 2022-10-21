function isPalindrome(string, start = 0, end = -1) {
    return start < Math.floor(string.length/2) ? string.at(start) === string.at(end) && isPalindrome(string, start + 1, end - 1) : true;
}