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
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");