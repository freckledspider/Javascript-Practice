// May 3, 2023
// Credit: codebubb on youtube

// ----------------------------------------

// Given a year, report if it is a leap year.

const isLeapYear = (year) => year % 4 === 0;

// console.log(isLeapYear(2014));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2017));
// console.log(isLeapYear(2018));
// console.log(isLeapYear(2019));

// ----------------------------------------

// Write a javascript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectsEqual = (a,b) => {
    return Object.keys(a).every(key => b.hasOwnProperty(key));
  }

// console.log(objectsEqual(objA, objB))
// console.log(objectsEqual(objA, objC))
// console.log(objectsEqual(objB, objC))

// ----------------------------------------

// Write a javscript program to convert a comma-separated values (CSV) string to a 2D array. A new line indivated a new row in the array.
// Example:
// abc, def, ghi
// jkl, mno, pqr
// stu, vwx, yza

const parseCSV = (csvString) => 
  csvString.split('\n').map(row => row.split(','))

const str = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`

// console.log(parseCSV(str))

// ----------------------------------------

// Write a javascript program to generate a random hex color code.

const getRandomHexNumber = () => 
  Math.floor(Math.random() * 16).toString(16)

const getRandomHexColor = () => 
  '#' + Array.from({ length: 6 })
  .map(getRandomHexNumber)
  .join('');

// console.log(getRandomHexColor())
// console.log(getRandomHexColor())
// console.log(getRandomHexColor())
// console.log(getRandomHexColor())

// ----------------------------------------

// Write a javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

console.log([1,2,3,4,5].every(x => x > 0))
console.log([1,2,3,4,5].every(x => x > 3))

// alternative way

const isEveryElem = (arr, fn) => {
  for (let i=0; i<arr.length; i+=1) {
    if (!fn(arr[i])) {
      return false
    }
  }
  return true;
}

console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))
console.log(isEveryElem([1,2,3,4,5], (x) => x > 3))