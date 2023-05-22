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
  findSmallestInt(arr) {
    let smallest = arr[0]; // Assume the first element is the smallest
    // for loop to compare each element in array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }

    return smallest;
  }
}