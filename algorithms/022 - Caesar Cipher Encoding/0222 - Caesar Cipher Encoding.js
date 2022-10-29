function caesarCipherEncryptor(string, key) {
    return [...string].map(letter => String.fromCharCode(97 + (letter.charCodeAt(0) - 97 + key % 26 ) % 26 )).join('');
  }