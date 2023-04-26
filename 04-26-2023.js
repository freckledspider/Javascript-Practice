// April 26, 2023
// Credit: codebubb on youtube

// ----------------------------------------

// Write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('abc'))
// console.log(makeNewString('abcdef'))
// console.log(makeNewString('abc123abc123'))

// console.log(makeNewString('ab'))

// ----------------------------------------

// Write a javascript program to extract the first half of a string iof even length.

const firstHalf = (str) => str.slice(0, str.length / 2)

console.log(firstHalf('temp'))
console.log(firstHalf('temple'))
console.log(firstHalf('temples'))