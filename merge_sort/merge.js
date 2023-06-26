// Build a function mergeSort that takes in an array 
// and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(array) {
    // console.log('passing through:', array)
    if (array.length > 1) {
        let mid = (array.length) / 2
        let low = array.slice(0, mid)
        let high = array.slice(mid, array.length)
        // console.log('low: ', low)
        // console.log('high: ', high)
        mergeSort(low) 
        mergeSort(high)
        return merge(low, high)
    }
}

function merge(lowArray, highArray) {
    let c = []
    console.log('merging:', lowArray, highArray)
    let i = 0; let j = 0; let k = 0;
    while (i < lowArray.length && j < highArray.length) {
        if(lowArray[i] < highArray[j]) {
            c[k++] = lowArray[i++]
        } else {
            c[k++] = highArray[j++]
        }
    }
    for (; i < lowArray.length; i++) {
        c[k++] = lowArray[i]
    }
    for (; j < highArray.length; j++) {
        c[k++] = highArray[j]
    }
    console.log('result: ', c)
    return c
}

// console.log(mergeSort([2]))
// console.log(mergeSort([4, 2]))
console.log(mergeSort([4,2,7,6]))
// console.log(mergeSort([6,4,3,8,1,2]))
// console.log(mergeSort([5, 3, 6, 0, 1, 11, 8, 3]))
