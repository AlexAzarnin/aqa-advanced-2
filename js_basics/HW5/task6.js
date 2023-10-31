// Create an array of numbers
const numbersList = [1,10,14,2,4,5,43,34];

// Create a sorted copy of the original array
const sortedArray = [...numbersList].sort((a, b) => a - b);

// Display both the original and the sorted arrays
console.log(numbersList);  // Original array
console.log(sortedArray);  // Sorted array