// Create the array of numbers
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// Initialize counters for positive, negative, and zero numbers
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Loop through each number and classify them
for (let num of numbers) {
    if (num > 0) positiveCount++;
    else if (num < 0) negativeCount++;
    else zeroCount++;
}

// Display the results
console.log("Number of positive numbers:", positiveCount);
console.log("Number of negative numbers:", negativeCount);
console.log("Number of zeros:", zeroCount);