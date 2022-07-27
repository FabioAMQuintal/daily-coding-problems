/*
This problem was asked by Pinterest.

Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
*/

const hops = (arr) => {
    for (let i=0; i<arr.length-1;) {
        if(arr[i] === 0){
            return false
        }
            i+=arr[i]
    }
    return true
}

console.log(hops([3, 0, 0, 0]))
console.log(hops([2, 0, 1, 0]))
console.log(hops([1, 1, 0, 1]))
console.log(hops([0, 2, 0, 1]))

