const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = options || {};
  options.repeatTimes ??= 1;
  options.separator ??= '+';
  options.addition = options.addition === undefined ? '' : options.addition;
  options.additionRepeatTimes ??= 1;
  options.additionSeparator ??= '|';

  let addition = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if(i < options.additionRepeatTimes - 1){
      addition += `${options.addition}${options.additionSeparator}`;
    } else{
      addition += `${options.addition}`;
    }
  }

  let result = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    if(i < options.repeatTimes - 1){
      result += `${str}${addition}${options.separator}`;
    } else{
      result += `${str}${addition}`;
    }
  }

  return result;
}

module.exports = {
  repeater
};
