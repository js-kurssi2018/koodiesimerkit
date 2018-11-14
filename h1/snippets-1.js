const t = require('./types')

// greet
function greet(name) {
  if (!t.isString(name)) {
    return console.log('Name should be a string')
  }

  console.log(`Hello, ${name}!`)
}

greet('Arto')
greet(123)

// median
function median(array) {
  if (!t.isNumberArray(array)) {
    return undefined
  }

  n = array.length
  if (n === 0) {
    return undefined
  }

  array.sort((a, b) => a - b)

  if (n % 2 === 0) {
    return (array[n/2 - 1] + array[n/2]) / 2
  } else {
    return array[(n-1)/2]
  }
}

console.log(median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(median([1, 3, 7]))