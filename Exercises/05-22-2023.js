// How to solve coding problems notes

// ----------------------------------------

// 1. Input -> Function -> Output
// 2. Write down steps to find output (pseudocode)
// 3. Return output

// console.log one line at a time
// debug as needed

// if using something like codewars, ~10 minutes if you are stuck to look at the solution if you feel you are not learning anymore.
// rewrite steps in your pseudo code if needed

// ----------------------------------------

// Codewars Exercises May 22, 2023

// ----------------------------------------

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Output will return the smallest number in any given array.

// 1. Assume that the first element in the array is the smallest number, which sets a starting point to compare the rest of the numbers.
// 2. Use a for loop to compare each element in the array with the first value already set as smallest.
// 3. Update the value of smallest if the element is smaller.
// 4. After loop is complete, each element has been compared.
// 5. Return smallest

class SmallestIntegerFinder {
//   findSmallestInt(arr) {
//     let smallest = arr[0]; // Assume the first element is the smallest
//     // for loop to compare each element in array
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }

//     return smallest;
//   }
// }

// alternative way
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }


// ----------------------------------------

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// This one would just be if and if else and else statements.

// function bmi(weight, height) {
//     let bmiNum = weight / (height * height);
//     if (bmiNum <= 18.5) {
//       return "Underweight";
//     }
//     else if (bmiNum <= 25.0) {
//       return "Normal";
//     }
//     else if (bmiNum <= 30.0) {
//       return "Overweight"
//     }
//     else {
//       return "Obese"
//     }
//   }

// ----------------------------------------

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// If statement to check if number is even, else statement if otherwise.

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//       return number * 8
//     } else {
//       return number * 9
//     }
// }
