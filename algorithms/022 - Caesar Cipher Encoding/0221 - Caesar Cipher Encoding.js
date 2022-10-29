function caesarCipherEncryptor(string, key) {
    const abecedary = "abcdefghijklmnopqrstuvwxyz";
    return [...string]
                .map(letter => abecedary.at((abecedary.indexOf(letter) + key) % abecedary.length ))
                .join('');
  }