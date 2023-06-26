// Build a function mergeSort that takes in an array 
// and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(array) {
    if (array.length > 1) {
        let mid = (array.length) / 2
        let low = array.slice(0, mid)
        let high = array.slice(mid, array.length)
        mergeSort(low) 
        mergeSort(high)
        return merge(low, high, array)
    }
}

function merge(lowArray, highArray, array) {
     console.log('merging:', lowArray, highArray, 'into:', array)
    let i = 0; let j = 0; let k = 0;
    while (i < lowArray.length && j < highArray.length) {
        if(lowArray[i] < highArray[j]) {
            array[k++] = lowArray[i++]
        } else {
            array[k++] = highArray[j++]
        }
    }
    for (; i < lowArray.length; i++) {
        array[k++] = lowArray[i]
    }
    for (; j < highArray.length; j++) {
        array[k++] = highArray[j]
    }
    console.log('turned into: ', array)
    return array
}

// console.log(mergeSort([2]))
// console.log(mergeSort([4, 2]))
// console.log(mergeSort([4,2,7,6]))
console.log(mergeSort([6,4,3,8,1,2]))
// console.log(mergeSort([5, 3, 6, 0, 1, 11, 8, 3, 3, 123, 44, 5, 10]))
