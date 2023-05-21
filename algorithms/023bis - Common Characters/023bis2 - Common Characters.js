function commonCharacters(strings) {
    return [... new Set(strings[0].split(""))].filter(char => strings.every(string => string.includes(char)));
  }