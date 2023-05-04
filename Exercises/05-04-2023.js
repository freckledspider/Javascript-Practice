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

// console.log(countLetters('abcde'))
// console.log(countLetters('abcde', ['b', 'c']))

// ----------------------------------------

// Write a javascript function to convert an amount to coins.  
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1

const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
    const totalCoins = [];
    for (let i=0; i<coins.length; i+=1) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for (let y=0; y<thisCoinNum; y+=1) {
            totalCoins.push(coins[i])
        }
        money -= coins[i] * thisCoinNum
    }
    return totalCoins
}

console.log(countCoins(46))