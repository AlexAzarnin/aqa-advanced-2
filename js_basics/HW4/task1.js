function calculateArea1(width, height) {
    return width * height;
}
console.log(`CalculateArea1 ${calculateArea1(5, 10)}`);

const calculateArea2 = function(width, height) {
    return width * height;
}
console.log(`CalculateArea2 ${calculateArea2(5, 10)}`);

const calculateArea3 = (width, height) => width * height;
console.log(`CalculateArea3 ${calculateArea3(5, 10)}`);