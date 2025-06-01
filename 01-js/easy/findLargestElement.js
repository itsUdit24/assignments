/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[0]; // Initialize largest with the first element of the array
    for (let i = 1; i < numbers.length; i++) { // Start from the second element of the array  
        if (numbers[i] > largest) { // Compare current element with largest
            largest = numbers[i]; // Update largest if current element is greater
        }
    }
    return largest; // Return the largest element found
}

/* function findLargestElement(numbers) {
  let largestNumber = numbers[0];
  numbers.forEach((number) => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });
  return largestNumber;
} */ //

module.exports = findLargestElement;


//last exam of final year tommorrow, My college life will be completing. 