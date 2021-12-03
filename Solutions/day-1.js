/* All credit to Alisa for this beauty */

import data from "./day-1-data.js"

function timesIncreasing(array) {
    let count = 0;
    array.reduce((a,b) => { b > a && count++; return b });
    return count;
}

const testData = [109, 117, 118, 98, 102, 94, 101]

console.log('Puzzle 1: ')
console.log('Number of times increasing: ', timesIncreasing(testData), 'should be 4.')
console.log('Number of times increasing: ', timesIncreasing(data))

const threeMeasureIncreasing = (depthsArray) =>
   timesIncreasing(depthsArray.map((el, i) => el + depthsArray[i + 1] + depthsArray[i + 2]))

console.log('Puzzle 2: ')
console.log('Number of times increasing: ', threeMeasureIncreasing(testData), 'should be 1.')
console.log('Number of times increasing: ', threeMeasureIncreasing(data))