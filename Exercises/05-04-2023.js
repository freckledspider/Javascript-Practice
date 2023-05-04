// May 4, 2023
// Credit: codebubb on youtube

// ----------------------------------------

// Write a javascript function that returns a passed string with letters in alphabetical order.
// Example: 'webmaster'
// Expected output: 'abeemrstw'

const alphabeticalOrder = (str) =>
    str.split('')
    .sort((a,b) => a > b ? 1 : -1)
    .join('')

// console.log(alphabeticalOrder('webmaster'))
// console.log(alphabeticalOrder('javascript'))

// ----------------------------------------

// Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string.

const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) => str
        .split('')
        .filter(s => letters.indexOf(s) > -1)
        .length;

console.log(countLetters('abcde'))
console.log(countLetters('abcde', ['b', 'c']))