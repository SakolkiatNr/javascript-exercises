const fibonacci = function(fn) {
    let fib = [0, 1];

    for (let i = 2; i <= +fn; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    if (+fn < 0) return 'OOPS';
    return fib[+fn];
};

// Do not edit below this line
module.exports = fibonacci;