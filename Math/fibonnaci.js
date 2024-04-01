/*
    The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
    After that, the next term is defined as the sum of the previous two terms

    Fn = Fn-1 + Fn-2    with seed values F0 = 0 and F1 = 1
*/

// Given a number 'n', find the first 'n' elements of the fibonnaci sequence

function fibonnaci(n) {
    if (n === 1) {
        return [0];
    }

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
// Big-O = O(n)

console.log(fibonnaci(1));
console.log(fibonnaci(2));
console.log(fibonnaci(3));
console.log(fibonnaci(7));