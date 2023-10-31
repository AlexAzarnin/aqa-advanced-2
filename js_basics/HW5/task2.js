// Create an initial array of numbers
const initialArray = [1, 2, 3, 4, 5];

// Mutate each number by multiplying it with its index
const mutatedArray = initialArray.map((value, index) => value * index);

// Display the mutated array
console.log(mutatedArray);