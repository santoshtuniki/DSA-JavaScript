// A prime number is a natural number greater than 1, which is only divisible by 1 and itself.

/*
    Iterate through all numbers from 2 to sqrt(n) and for every number check if it divides n.
    If we find any number that divides, we return false.
*/

// Given a number 'n', determine if 'n' is prime

function prime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}
// Big-O = O(n)


function prime2(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}
// Big-O = O(sqrt(n))

console.log(prime(2));
console.log(prime(5));
console.log(prime(9));

console.log(prime2(2));
console.log(prime2(5));
console.log(prime2(9));
