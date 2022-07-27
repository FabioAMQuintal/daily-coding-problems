/*

This problem was asked by Cisco.

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, 10101010 should be 01010101. 11100010 should be 11010001.

*/

const swapbits = (bit) => {
    const arr = bit.split("")
    for(let i=0; i<arr.length; i+=2){
        if(arr[i] === arr[i+1]){
            continue
        }
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
    return arr.join('')
}
console.log(swapbits('11100010'))