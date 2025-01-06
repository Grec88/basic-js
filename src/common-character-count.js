const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const count1 = s1.split("").reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
  const count2 = s2.split("").reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
  for (const val1 in count1) {
    if (count2[val1]) {
      result += Math.min(count1[val1], count2[val1]);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};

