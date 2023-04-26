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

// console.log(firstHalf('temp'))
// console.log(firstHalf('temple'))
// console.log(firstHalf('temples'))

// ----------------------------------------

// Write a javascript program to concatenate two strings except their first character.

const concatenate = (str1, str2) => 
    str1.slice(1) + str2.slice(1)

// console.log(concatenate('abc', 'def'))
// console.log(concatenate('Junior', 'Developer'))

// ----------------------------------------

// Given two values, write a javascript program to find out which one is nearest to 100.

const closestTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

// console.log(closestTo100(99, 1))
// console.log(closestTo100(49, 51))
// console.log(closestTo100(50, 50))

// ----------------------------------------

// Write a javascript program to check a given string contains 2 to 4 occurences of a specified character.

const countChars = (str, char) => 
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

// console.log(contains2To4('ooh', 'o'))
// console.log(contains2To4('oh', 'o'))
// console.log(contains2To4('oooh', 'o'))
// console.log(contains2To4('ooooh', 'o'))
// console.log(contains2To4('oooooh', 'o'))

// ----------------------------------------

// Write a javascript program to find the number of even digits in an array of integers.

const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

// console.log(countEvenNumbers([1,2,3,4,5,6]))
// console.log(countEvenNumbers([2,2,2,2,2,2]))
// console.log(countEvenNumbers([3,5,7,9,10,100]))

// ----------------------------------------

// Write a javascript program to find the number of even values up to a given number.

const countEvenNumbers2 = (arr) =>
    arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i += 1) {
        returnArray.push(i)
    }
    return returnArray
}

// console.log(countEvenNumbers2(createArrayOfNumbers(6)))
// console.log(countEvenNumbers2(createArrayOfNumbers(9)))

// ----------------------------------------

// Write a javascript program to check whether a given array of integers is sorted in ascending order.

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([1,2,3,4,5,6]))
console.log(isAscending([1,2,5,4,3,6]))
console.log(isAscending([1,2,3,4,6,6]))