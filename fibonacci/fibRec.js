function fibsRec(n) {
    if (n === 0) {
        return [0]
    }
    if(n === 1) {
        return [0, 1]
    }
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 1)[n - 2]]
 }

 
console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 13]
console.log(fibsRec(5)) // [0, 1, 1, 2, 3]
console.log(fibsRec(2)) // [0, 1, 1]