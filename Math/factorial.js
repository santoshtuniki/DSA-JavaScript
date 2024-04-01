// For any positive integer ‘n’, the factorial of n is the product of all the values from 1 to n.

// Given a number 'n', find the factorial of 'n'

function factorial(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product
}
// Big-O = O(n)

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(7));