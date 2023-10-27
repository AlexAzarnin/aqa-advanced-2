function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Devide by zero is not possible");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Arguments should be numbers!");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10, 2)); // 5
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done");
}


try {
    console.log(divide(10, 0)); // Devide by zero is not possible
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done");
}
try {
    console.log(divide("wewe", 2)); // Arguments should be numbers
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done");
}