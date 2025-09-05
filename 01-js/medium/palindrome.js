/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^\w]/g, ""); // normalize input
  const reversed = cleaned.split("").reverse().join("");   // reverse it
  return cleaned === reversed; // check if same
}

module.exports = isPalindrome;


// Excited for what's next! College is officialy over, and I'm ready to take on new challenges.
// Studying JS now heavily, For some couple of days like 10.

/* 
BRUTE FORCE APPROACH
function isPalindrome(str) {
  const lowerCasedStr = str.toLowerCase();               // Convert string to lowercase
  const charactersArray = lowerCasedStr.split("");       // Split string into array of characters
  const reversedArray = charactersArray.reverse();       // Reverse the array of characters
  const reversedStr = reversedArray.join("");            // Join the reversed array back into a string

  return lowerCasedStr === reversedStr;                 // Compare original and reversed strings
}


function isPalindrome(str) {
  const reversedString = str
    .toLowerCase()              // convert to lowercase (case-insensitive)
    .replace(/[^\w]/g, "")      // remove non-alphanumeric characters
    .split("")                  // convert string → array of characters
    .reverse()                  // reverse array
    .join("");                  // join back into string

  return reversedString === str.toLowerCase().replace(/[^\w]/g, "");
}

module.exports = isPalindrome;

*/