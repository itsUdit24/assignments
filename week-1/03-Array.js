// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() - adds one or more elements to the end of an array and returns the new length of the array
function pushExample(arr, element) {
  console.log("Original Array:", arr); // Original Array: [1, 2, 3]

  arr.push(element); // Adds element to the end of the array
  console.log("After push:", arr); // After push: [1, 2, 3, 4]
}
pushExample([1, 2, 3], 4);

// pop() - removes the last element from an array and returns that element
function popExample(arr) {
  console.log("Original Array:", arr); // Original Array: [1, 2, 3]

  arr.pop();
  console.log("After pop:", arr); // After pop: [1, 2]
}
popExample([1, 2, 3]);

// shift() - removes the first element from an array and returns that element
function shiftExample(arr) {
  console.log("Original Array:", arr); // Original Array: [1, 2, 3]

  arr.shift();
  console.log("After shift:", arr); // After shift: [2, 3]
}
shiftExample([1, 2, 3]);

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
function unshiftExample(arr, element) {
  console.log("Original Array:", arr); // Original Array: [1, 2, 3]

  arr.unshift(element);
  console.log("After unshift:", arr); // After unshift: [0, 1, 2, 3]
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

/*
Push mein the second argument is a number concat mein second argument is an array.
How concat is different from push and unshift?
- push and unshift modify the original array and return the new length of the array.
- concat does not modify the original arrays. It returns a new array that is the combination of the two arrays.
*/

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
//Things get tougher from here on. So pay attention.
const initialArray = [1, 2, 3];
/*
for(let i =0; i<initialArray.length; i++){
console.log(initialArray[i])
}
*/
function logThing(str){
console.log(str);
}
intialArray.forEach(logThing)
/*
callback function is a function that is passed as an argument to another function.
In this case, the function logThing is passed as an argument to the forEach method.
The forEach method calls the logThing function for each element in the array.
It is similar to writing 
logThing(1)
logThing(2)
logThing(3)
output will be: for both cases
1
2
3
*/

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);