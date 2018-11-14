/**
 * To run these examples, type on the command line:
 *
 *  node examples.js
 */
const t = require('./types')

// The following examples for parseNumber and parseInt have been adapted from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Convert_numeric_strings_and_null_to_numbers
console.log('--- parseNumber ---')
console.log(t.parseNumber('123'))     // 123
console.log(t.parseNumber('12.3'))    // 12.3
console.log(t.parseNumber('123e-1'))  // 12.3
console.log(t.parseNumber(''))        // NaN
console.log(t.parseNumber(null))      // NaN 
console.log(t.parseNumber('0x11'))    // 17
console.log(t.parseNumber('0b11'))    // 3
console.log(t.parseNumber('0o11'))    // 9
console.log(t.parseNumber('foo'))     // NaN
console.log(t.parseNumber('100a'))    // NaN
console.log()
console.log('--- parseInt ---')
console.log(t.parseInt('123'))     // 123
console.log(t.parseInt('12.3'))    // NaN
console.log(t.parseInt('123e-1'))  // NaN
console.log(t.parseInt(''))        // NaN
console.log(t.parseInt(null))      // NaN 
console.log(t.parseInt('0x11'))    // 17
console.log(t.parseInt('0b11'))    // 3
console.log(t.parseInt('0o11'))    // 9
console.log(t.parseInt('foo'))     // NaN
console.log(t.parseInt('100a'))    // NaN

// All the following examples evaluate to true
console.log()
console.log('--- is... ---')
console.log(t.isNumber(123))
console.log(t.isNumber(123.4))
console.log(t.isBoolean(true))
console.log(t.isBoolean(new Boolean(false)))
console.log(t.isString('abc'))
console.log(t.isString('123'))
console.log(t.isString(new String('abc')))
console.log(t.isObject({}))
console.log(t.isObject({ make: 'VW', model: 'Golf' }))
console.log(t.isFunction(function(x) {}))
console.log(t.isFunction(x => x))
console.log(t.isArray(['a', 'b', 'c']))
console.log(t.isArray([1, 2, 3]))
console.log(t.isArray(new Array(1, 2, 3)))

// The following examples test arrays
console.log()
console.log('--- isNumberArray ---')
console.log(t.isNumberArray([1, 2, 3]))        // true
console.log(t.isNumberArray([1, 2.3, 4.5]))    // true
console.log(t.isNumberArray([1, 2, '3']))      // false
console.log()
console.log('--- isIntegerArray ---')
console.log(t.isIntegerArray([1, 2, 3]))        // true
console.log(t.isIntegerArray([1, 2.3, 4.5]))    // false
console.log(t.isIntegerArray([1, 2, '3']))      // false
