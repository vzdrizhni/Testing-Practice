let caesar = (str, key) => {

  let decipher = '';

  for(i=0; i<str.length;i++) {
    let char = str[i];
    if(str[i].match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if( (code >= 65) && (code <= 90) ) {
         char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      }
      else if((code >= 97) && (code <= 122)) {
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }
    decipher +=char;
  }

  return decipher;
};

module.exports = caesar;