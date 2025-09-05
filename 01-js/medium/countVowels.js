/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
//npx jest ./tests/countVowels.test.js
function countVowels(str) {
    // Your code here
  let vowelsCount = 0;
  const vowels = "aeiou"; // simpler as a string

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = countVowels;

/* 
BRUTE FORCE APPROACH
function countVowels(str) {
  let vowelsCount = 0;                           // Counter to track vowels
  const charactersArray = str.toLowerCase().split(""); // Convert to lowercase & split into array of characters
  let vowels = ["a", "e", "i", "o", "u"];       // Array of vowels

  charactersArray.forEach((character) => {       // Loop through each character
    vowels.forEach((vowel) => {                  // Loop through each vowel
      if (vowel === character) {                 // Compare character with vowel
        vowelsCount += 1;                        // Increase count if match found
      }
    });
  });

  console.log(vowelsCount)                       // Debug log
  return vowelsCount;                            // Return result
}
*/