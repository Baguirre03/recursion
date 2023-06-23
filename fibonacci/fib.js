//ASSIGNMENT ONE

// Using Iteration -> Write a function fibs
// takes a number and returns an array containg that many
// numbers from the fib sequence

function fibs(n) {
    let fibsArray = [0,1];
    for (i = 2; i < n; i++) {
        fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2])
    }
    return fibsArray
}

console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 13]
