// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");
/*
Output:
Original String: Hello World
Length: 11
*/ 

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");
/*Output:
Original String: Hello World
Index: 6
It will give -1 if the target string is not found.
*/

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");
/*
Output:
Original String: Hello World World
Index: 12
But if we use indexOf it will give 6, Because indexOf starts searching from the beginning.
and lastIndexOf starts searching from the end.
*/ 

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);
/*
Output:
Original String: Hello World
After slice: Hello
It doesnot include the end index. 
I can call it directly on string as well like this:
console.log("Hello World".slice(0, 5));
output: Hello
few years back we used to use substr() but now it is deprecated.
though both slice() and substring() works same but there is a difference.
slice() can take negative index as well but substring() cannot. 
For example:
console.log("Hello World".slice(-5));
output: World
console.log("Hello World".substring(-5));
output: Hello World
*/
// Little bit on slice() method and substring() method
const value = "Hello World";
console.log(value.slice(2, 5)); // llo
console.log(value.substring(2, 5)); // llo
let ans = value.substr(2, 5); // llo W
console.log(ans); // llo W
// In slice and substring, the first parameter is the starting index and the second parameter is the ending index (not included).
// In substr, the first parameter is the starting index and the second parameter is the length of the substring to be extracted.


//Internally slice() may have been written like this:
function customSlice(str, start, end) {
  let result = "";
  for (let i = start; i < end && i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(customSlice("Hello World", 0, 5)); // Hello

// Testing customSlice function
const customSlice = "UditPradhan";
console.log(customSlice.slice(0, 4)); // Udit
console.log(customSlice.substring(0, 4)); // Udit
console.log(customSlice.substr(0, 4)); // Udit
let ansHere = customSlice.slice(0,5);  // If 4 is given then it will print Udit only
console.log(ansHere); // UditP



// Internally substring() may have been written like this:
function customSubstring(str, start, end) {
  let result = "";
    if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
    for (let i = start; i < end && i < str.length; i++) {
    result += str[i];
    }
  }
  return result;

console.log(customSubstring("Hello World", 0, 5)); // Hello


// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " "); // split by space, delimiter is space output is array of strings 
//output: [ 'Hello', 'World' ]
splitString("apple,banana,cherry", ","); // split by comma, delimiter is comma
//output: [ 'apple', 'banana', 'cherry' ]

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");
//for deleting extra spaces in between words we can use regex
function removeExtraSpaces(str) {
  console.log("Original String:", str); // Original String: "  Hello    World  "
  console.log("After removing extra spaces:", str.replace(/\s+/g, ' ').trim()); // After removing extra spaces: "Hello World"
}
removeExtraSpaces("  Hello    World  "); // Original String: "  Hello    World  " After removing extra spaces: "Hello World"


// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World"); // Original String: Hello World After toUpperCase: HELLO WORLD

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World"); // Original String: Hello World After toLowerCase: hello world

// Note: There are many more string methods available in JavaScript. These are some of the most commonly used ones.
// some other methods are: charAt(), charCodeAt(), concat(), includes(), endsWith(), startsWith(), repeat(), etc.
// You can explore them on your own.
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// Split and Slice here are the most important one.Rest are pretty much self explanatory and simple school boy stuff.
// Play and learn by doing.
// Happy coding.