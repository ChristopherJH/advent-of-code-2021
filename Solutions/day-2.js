import { readFileSync } from 'fs';

let data = readFileSync("./day-2-data.txt", 'utf-8')
    .split('\r\n');

function findPosition(array) {
    let horizontal = 0;
    let vertical = 0;
    for (let instruction of array) {
        const magnitude = parseInt(instruction[instruction.length - 1])
        if (instruction[0] === "f") {
            horizontal += magnitude
        } else if (instruction[0] === "d") {
            vertical += magnitude
        } else {
            vertical -= magnitude
        }
    }
    return horizontal * vertical
}

const testData = ['forward 1', 'down 9',    'down 4',    'forward 4', 'down 2']

console.log('Puzzle 1: ')
console.log(findPosition(testData), 'should be 75')
console.log(findPosition(data))

function findPositionWithAim(array) {
    let aim = 0;
    let depth = 0;
    let horizontal = 0;
    for (let instruction of array) {
        const magnitude = parseInt(instruction[instruction.length - 1])
        if (instruction[0] === "f") {
            horizontal += magnitude
            depth += magnitude * aim
        } else if (instruction[0] === "d") {
            aim += magnitude
        } else {
            aim -= magnitude
        }
    }
    return horizontal * depth
}

const testData2 = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

console.log('Puzzle 2: ')
console.log(findPositionWithAim(testData2), 'should be 900')
console.log(findPositionWithAim(data))