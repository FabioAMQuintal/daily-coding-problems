/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/
const list = [10, 15, 3, 7];
const number = 17;
const numberEdge = 14;

const findSum = (list: number[], number: number): boolean => {
    for(let i=0; i<list.length-1; i++){
        for(let j=1; j<list.length; j++){
            if(list[i] + list[j] === number){
                return true;
            }
        }
    }
    return false;
}

const findSumOnePass = (list: number[], number: number): boolean => {
    const memoization = {}
    for(let i=0; i<list.length; i++){
        let rest = number - list[i]
        if(rest in memoization){
            return true;
        } else {
            memoization[list[i]] = list[i];
        }
    }
    return false
}

console.log(findSumOnePass(list, number))
console.log(findSumOnePass(list, numberEdge))
