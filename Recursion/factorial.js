// Given a number 'n', find the factorial of 'n'

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1)
}
// Big-O = O(n)

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(7));
