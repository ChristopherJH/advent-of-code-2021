import { readFileSync } from 'fs';

let numbers = readFileSync("./day-4-numbers.txt", 'utf-8')
    .split(',');

let boards = readFileSync("./day-4-boards.txt", 'utf-8')
.split('\n');
let filteredBoards = boards.filter((item) => item.length > 1)
const newBoards = []

for (let line of filteredBoards) {
    newBoards.push(line.split(' ').filter((item) => item !== ''))
}

// Create array based on number of groups
boards = new Array(5)
// Make sure each element isn't empty
.fill('')
// For each group, grab the right `slice` of the input array
.map((_, i) => newBoards.slice(i * 5, (i + 1) * 5));

// console.log(numbers)
//console.log(boards)

function bingo(boards, numbers) {
    let finalBoard;
    let finalNumber;
    const arrayColumn = (arr, n) => arr.map(x => x[n]);

    for (let number of numbers) {
        for (let board of boards) {
            for (let row of board) {
                for (let item of row) {
                    if (number === item) {
                        row[row.indexOf(item)] = 'X'
                    }
                }
                if (row.join('') === 'XXXXX') {
                    finalNumber = parseInt(number)
                    finalBoard = board
                    return calculateResult(finalBoard, finalNumber)
                }
                for (let i=0; i<5; i++) {
                    if (arrayColumn(board, i).join('') === 'XXXXX') {
                        finalNumber = parseInt(number)
                        finalBoard = board
                        return calculateResult(finalBoard, finalNumber)
                    }
                }
            }
        }
    }
}

function calculateResult(board, number) {
    let result = 0;
    for (let row of board) {
        for (let item of row) {
            if (item !== 'X') {
                result += parseInt(item)
            }
        }
    }
    return result*number
}

console.log(bingo(boards, numbers))