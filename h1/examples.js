/**
 * To run these examples, type on the command line:
 *
 *  node examples.js
 */
const c = require('./convert')

// The following examples for parseNumber and parseInt have been adapted from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Convert_numeric_strings_and_null_to_numbers
console.log('--- parseNumber ---')
console.log(c.parseNumber('123'))     // 123
console.log(c.parseNumber('12.3'))    // 12.3
console.log(c.parseNumber('123e-1'))  // 12.3
console.log(c.parseNumber(''))        // undefined
console.log(c.parseNumber(null))      // undefined 
console.log(c.parseNumber('0x11'))    // 17
console.log(c.parseNumber('0b11'))    // 3
console.log(c.parseNumber('0o11'))    // 9
console.log(c.parseNumber('foo'))     // undefined
console.log(c.parseNumber('100a'))    // undefined
console.log()
console.log('--- parseInt ---')
console.log(c.parseInt('123'))     // 123
console.log(c.parseInt('12.3'))    // undefined
console.log(c.parseInt('123e-1'))  // undefined
console.log(c.parseInt(''))        // undefined
console.log(c.parseInt(null))      // undefined 
console.log(c.parseInt('0x11'))    // 17
console.log(c.parseInt('0b11'))    // 3
console.log(c.parseInt('0o11'))    // 9
console.log(c.parseInt('foo'))     // undefined
console.log(c.parseInt('100a'))    // undefined

// All the following examples evaluate to true
console.log()
console.log('--- is ---')
console.log(c.is('Number', 123))
console.log(c.is('Number', 123.4))
console.log(c.is('String', 'abc'))
console.log(c.is('String', '123'))
console.log(c.is('String', new String('abc')))
console.log(c.is("Array", ['a', 'b', 'c']))
console.log(c.is('Array', [1, 2, 3]))
console.log(c.is('Array', new Array(1, 2, 3)))

// The following examples test arrays
console.log()
console.log('--- isNumberArray ---')
console.log(c.isNumberArray([1, 2, 3]))        // true
console.log(c.isNumberArray([1, 2.3, 4.5]))    // true
console.log(c.isNumberArray([1, 2, '3']))      // false
console.log()
console.log('--- isIntegerArray ---')
console.log(c.isIntegerArray([1, 2, 3]))        // true
console.log(c.isIntegerArray([1, 2.3, 4.5]))    // false
console.log(c.isIntegerArray([1, 2, '3']))      // false
