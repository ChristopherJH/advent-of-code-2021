import { readFileSync } from 'fs';

let data = readFileSync("./day-3-data.txt", 'utf-8')
    .split('\n');

function powerConsumption(array) {
    let index = 0;
    let gamma = '';
    let epsilon = '';
    while (index < array[0].length) {
        let ones = 0;
        let zeroes = 0;
        for (let code of array) {
            if (code[index] === '1') {
                ones++
            } else {
                zeroes++
            }
        }
        if (ones > zeroes) {
            gamma += '1'
            epsilon += '0'
        } else {
            gamma += '0'
            epsilon += '1'
        }
        index++
    }
    return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

const testData = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010']

console.log("Puzzle 1:")
console.log(powerConsumption(testData), 'should be 198')
console.log(powerConsumption(data))

// returns [mostCommon, leastCommon]
function mostAndLeastCommon(array, index) {
    const onesArray = []
    const zeroesArray = []
    for (let code of array) {
        if (code[index] === '1') {
            onesArray.push(code)
        } else {
            zeroesArray.push(code)
        }
    }
    if (onesArray.length < zeroesArray.length) {
        return [zeroesArray, onesArray]
        // Don't need a condition for onesArray.length === zeroesArray.length as the output would be the same as the one provided in else
    } else {
        return [onesArray, zeroesArray]
    }
}

function lifeSupportRating(array) {
    let [oxygenArray, carbonArray] = [array, array]
    let index = 0
    while (index < array[0].length) {
        if (oxygenArray.length > 1) {
            oxygenArray = mostAndLeastCommon(oxygenArray, index)[0]
        }
        if (carbonArray.length > 1) {
            carbonArray = mostAndLeastCommon(carbonArray, index)[1]
        }
        index++
    }
    return parseInt(oxygenArray[0], 2) * parseInt(carbonArray[0], 2)
}

console.log("Puzzle 2:")
console.log(lifeSupportRating(testData), 'should be 230')
console.log(lifeSupportRating(data))