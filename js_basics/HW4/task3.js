function recursiveFunction(num) {
    console.log(num);
    if (num <= 0) {
        return;
    }
    recursiveFunction(num - 1);
}
recursiveFunction(5);