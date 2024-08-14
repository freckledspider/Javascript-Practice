// Codewars 8 kyu

// ----------------------------------------

// Even or Odd
// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

// My solution:
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even"
    }
    else {
      return "Odd"
    }
  }

// ----------------------------------------

// Multiply
// This code does not execute properly. Try to figure out why.

// My solution:
function multiply(a, b){
    return a * b
  }
// Was missing return

// ----------------------------------------

// Return Negative
// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

// My solution:
function makeNegative(num) {
  if (num < 0) {
    return num
  }
  else {
    return num - (num * 2);
  }
}