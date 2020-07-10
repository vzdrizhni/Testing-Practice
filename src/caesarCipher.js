exports.caesarCipher = (str, key) => {
  let decipher = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (str[i].match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90)) {
        char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if ((code >= 97) && (code <= 122)) {
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }
    decipher += char;
  }

  return decipher;
};