const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  if (str !== "") {
    let currentChar = str[0];
    let currentCount = 1;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === currentChar) {
        currentCount++;
      } else {
        result +=
          currentCount === 1 ? currentChar : `${currentCount}${currentChar}`;
        currentChar = str[i];
        currentCount = 1;
      }
    }
    result +=
      currentCount === 1 ? currentChar : `${currentCount}${currentChar}`;
  }
  return result;
}

module.exports = {
  encodeLine,
};

