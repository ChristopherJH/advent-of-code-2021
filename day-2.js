import { readFileSync } from 'fs';

let data = readFileSync("./day-2-data.txt", 'utf-8')
    .split('\r\n');

function calculatePosition(array) {
    let horizontal = 0;
    let vertical = 0;
    for (let instruction of array) {
        if (instruction[0] === "f") {
            horizontal += parseInt(instruction[instruction.length - 1])
        } else if (instruction[0] === "d") {
            vertical += parseInt(instruction[instruction.length - 1])
        } else {
            vertical -= parseInt(instruction[instruction.length - 1])
        }
    }
    return horizontal * vertical
}

const testData = ['forward 1', 'down 9',    'down 4',    'forward 4', 'down 2']

console.log('Puzzle 1: ')
console.log(calculatePosition(testData), 'should be 75')
console.log(calculatePosition(data))

function calculatePositionWithAim(array) {
    let aim = 0;
    let depth = 0;
    let horizontal = 0;
    for (let instruction of array) {
        if (instruction[0] === "f") {
            horizontal += parseInt(instruction[instruction.length - 1])
            depth += parseInt(instruction[instruction.length - 1]) * aim
        } else if (instruction[0] === "d") {
            aim += parseInt(instruction[instruction.length - 1])
        } else {
            aim -= parseInt(instruction[instruction.length - 1])
        }
    }
    return horizontal * depth
}

const testData2 = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

console.log('Puzzle 2: ')
console.log(calculatePositionWithAim(testData2), 'should be 900')
console.log(calculatePositionWithAim(data))