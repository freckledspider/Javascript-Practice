// April 25, 2023
// Credit: codebubb on youtube

// ----------------------------------------

// Write a Javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

// console.log(isEqualTo100(100,0))
// console.log(isEqualTo100(0,100))

// console.log(isEqualTo100(10,0))
// console.log(isEqualTo100(0,10))

// console.log(isEqualTo100(20,80))
// console.log(isEqualTo100(50,50))

// ----------------------------------------

// Write a javascript program to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))

// console.log(getFileExtension('index.html'))
// console.log(getFileExtension('webpack.config.js'))

// ----------------------------------------

// Write a javasript program to replace every character n a given string with the character following it in the alphabet

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

// console.log(moveCharsForward('abcd'))

// ----------------------------------------

// Write a javascript program to get the current date.
// Expected output: mm-dd-yy, mm/dd/yy, or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${months}/${days}/${years}`
}

// console.log(formatDate())

// ----------------------------------------

// Write a javascript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const addNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`

console.log(addNew('New! Offers'))