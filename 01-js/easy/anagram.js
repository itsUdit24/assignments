/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase for case-insensitive comparison
  const normalize = (str) =>
    str.replace(/\s/g, '').toLowerCase().split('').sort().join('');

return normalize(str1) === normalize(str2);

}

module.exports = isAnagram;


/* 
✅ Explanation:
replace(/\s/g, '') removes all whitespace.

toLowerCase() makes the comparison case-insensitive.

split('').sort().join('') rearranges the characters in sorted order, so we can directly compare.

*/