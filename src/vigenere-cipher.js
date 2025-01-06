const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(n = true) {
    this.mode = n;
  }
  encrypt(message, key) {
    if (message && key) {
      const lengthDiff = message.length - key.length;
      if (lengthDiff > 0) {
        key = key.padEnd(lengthDiff + key.length, key.substring(0, lengthDiff));
      }
      let messageArr = message.toLowerCase().split("");
      let keyArr = key.toLowerCase().split("");
      for (let i = 0; i < messageArr.length; i++) {
        let code = messageArr[i].charCodeAt(0);
        if (code >= 97 && code <= 122) {
          let codeAdd = keyArr[i].charCodeAt(0) - 97;
          let newCode = code + codeAdd;
          if (newCode > 122) {
            newCode = 97 + Math.abs(123 - newCode);
          }
          console.log(codeAdd);
          messageArr[i] = String.fromCharCode(newCode);
        } else {
          keyArr.splice(i, 0, " ");
        }
      }
      return this.mode
        ? messageArr.join("").toUpperCase()
        : messageArr.reverse().join("").toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      const lengthDiff = encryptedMessage.length - key.length;
      if (lengthDiff > 0) {
        key = key.padEnd(lengthDiff + key.length, key.substring(0, lengthDiff));
      }
      let messageArr = encryptedMessage.toLowerCase().split("");
      let keyArr = key.toLowerCase().split("");
      for (let i = 0; i < messageArr.length; i++) {
        let code = messageArr[i].charCodeAt(0);
        if (code >= 97 && code <= 122) {
          let codeAdd = keyArr[i].charCodeAt(0) - 97;
          let newCode = code - codeAdd;
          if (newCode < 97) {
            newCode = 123 - Math.abs(97 - newCode);
          }
          console.log(codeAdd);
          messageArr[i] = String.fromCharCode(newCode);
        } else {
          keyArr.splice(i, 0, " ");
        }
      }
      return this.mode
        ? messageArr.join("").toUpperCase()
        : messageArr.reverse().join("").toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

