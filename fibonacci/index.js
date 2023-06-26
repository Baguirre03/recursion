
// Now write another func fibsREC, solves same prob recursively
// FIB ALWAYS starts with [0, 1]
// We are going to use numbers (n) as the index in the array
// WHAT do we need to be pushing into the array though?
// FIB is defined as f[n] = f[n-1] + f[n-2]
// That  being said how do we run that in a  recursive seq?

// HOLDER = [0, 1]
// If n is equal to one? actually it would be  2,
//  because f[1-2] would lead to a negative number 

// we then want to push into the array, based on fib()
// fibRec(8) + fibRec(7) + fibsRec(6)
function fibsRec(n, holder = [0,1]) {
    if (n < 2) {
        return n
    }
    return fibsRec(n - 1) + fibsRec(n - 2)
}
 

// FIBS (3) -> fibs(2) + fibs(1)
//              fibs(1) + fibs (0)
console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 13]
console.log(fibsRec(5))