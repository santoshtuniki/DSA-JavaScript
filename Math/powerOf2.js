// Given a number 'n', determine if the number is a power of 2 (or) not

/*
    A simple method for this is to simply take the log of the number on base 2 and 
    if you get an integer then the number is the power of 2.

    Another way, Brian Kernighan’s algorithm
*/

function power(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true;
}
// Big-O = O(log n)

function power2(n) {
    if (n == 0)
        return false;

    return parseInt((Math.ceil((Math.log(n) / Math.log(2)))))
        == parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
}
// Big-O = O(1)

function power3(n) {
    if (n == 0)
        return false;

    return (n & (n - 1)) === 0
}
// Big-O = O(1)

console.log(power(0));
console.log(power(1));
console.log(power(2));
console.log(power(9));

// console.log(power2(0));
// console.log(power2(1));
// console.log(power2(2));
// console.log(power2(9));

// console.log(power3(0));
// console.log(power3(1));
// console.log(power3(2));
// console.log(power3(9));
