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
 * Returns as a string the type of the first argument
 * 
 * @param {*} obj object whose type is to be returned
 */
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function isNumber(x) {
  return getType(x) === 'Number'
}

function isInteger(x) {
  return isNumber(x) && x % 1 === 0
}

function isBoolean(x) {
  return getType(x) === 'Boolean'
}

function isString(x) {
  return getType(x) === 'String'
}

function isObject(x) {
  return getType(x) === 'Object'
}

function isFunction(x) {
  return getType(x) === 'Function'
}

function isArray(x) {
  return getType(x) === 'Array'
}

function isArrayOf(array, fun) {
  if (!isArray(array)) {
    return false
  }

  function notFun(x) {
    return !fun(x)
  }

  return array.find(notFun) === undefined
}

function isNumberArray(array) {
  return isArrayOf(array, isNumber)
}

function isIntegerArray(array) {
  return isArrayOf(array, isInteger)
}

module.exports = {
  parseNumber,
  parseInt,
  getType,
  isNumber,
  isInteger,
  isBoolean,
  isString,
  isObject,
  isFunction,
  isArray,
  isArrayOf,
  isNumberArray,
  isIntegerArray
}
