function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14"); // Outputs 3 because parseInt stops parsing at the decimal point so it will parred it down to 3
explainParseInt("px42"); // Outputs NaN because the string does not start with a number

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14"); 
explainParseFloat("42");
explainParseFloat("42px");

/*
parseInt() converts a string to an integer by parsing it until it encounters a non-numeric character.
Any gibberish after a number is ignored. example: parseInt("42px") returns 42. 
But if the string does not start with a number, 
it returns NaN. example: parseInt("px42") returns NaN.
*/