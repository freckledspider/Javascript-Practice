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

console.log(parseCSV(str))