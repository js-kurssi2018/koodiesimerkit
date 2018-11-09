/**
 * Converts the specified numeric string to a number.
 * If the string cannot be converted to a number, returns undefined.
 * 
 * @param {string} string string to be converted to a number
 */
function parseNumber(string) {
  // Exclude special cases
  // Number converts both '' and null to 0
  if (string === '' || string === null) {
    return undefined
  }

  // Convert to a number
  let x = Number(string)
  return isNaN(x) ? undefined : x
}

/**
 * Converts the specified numberic string to an integer.
 * If the specified string cannot be converted to an integer, returns undefined.
 * 
 * @param {string} string string to be converted to an integer
 */
function parseInt(string) {
  // Convert to a number
  let x = parseNumber(string)
  if (x === undefined) {
    return undefined
  }

  // Test whether the number is an integer
  if (x % 1 !== 0) {
    return undefined
  }

  return x
}

/**
 * Returns true if obj is of the specified type
 * 
 * Reference: http://bonsaiden.github.io/JavaScript-Garden/#types
 * 
 * @param {*} type 
 * @param {*} obj 
 */
function is(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && clas === type;
}

function isArrayOf(array, fun) {
  if (!is('Array', array)) {
    return false
  }

  function notFun(x) {
    return !fun(x)
  }

  return array.find(notFun) === undefined
}

function isNumberArray(array) {
  function isNumeric(x) {
    return is('Number', x)
  }

  return isArrayOf(array, isNumeric)
}

function isIntegerArray(array) {
  function isInteger(x) {
    return is('Number', x) && x % 1 === 0
  }

  return isArrayOf(array, isInteger)
}

module.exports = {
  parseNumber,
  parseInt,
  is,
  isArrayOf,
  isNumberArray,
  isIntegerArray
}
