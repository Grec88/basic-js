const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const buff1 = `${n}`.split("");
  let arr = [];
  for (let i = 0; i < buff1.length; i++) {
    let buff2 = [...buff1];
    buff2.splice(i, 1);
    arr.push(Number(buff2.join("")));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};

