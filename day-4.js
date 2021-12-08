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
boards = new Array(599)
// Make sure each element isn't empty
.fill('')
// For each group, grab the right `slice` of the input array
.map((_, i) => newBoards.slice(i * 5, (i + 1) * 5));

function bingo(boards, numbers, findLoser = false) {
    // Function to turn a column into its own array
    const arrayColumn = (arr, n) => arr.map(x => x[n]);

    for (let number of numbers) {
        for (let board of boards) {
            for (let row of board) {
                for (let item of row) {
                    if (findLoser && boards.length === 1) {
                        console.log('Loser condition triggered')
                        console.log('Final line: ', parseInt(numbers[numbers.indexOf(number)-1]))
                        return calculateResult(boards[0], parseInt(numbers[numbers.indexOf(number)-1]))
                    }
                    if (number === item) {
                        row[row.indexOf(item)] = 'X'
                    }
                }
                if (row.join('') === 'XXXXX') {
                    console.log(board)
                    console.log('Row bingo:', boards.length)
                    if (findLoser) {
                        boards.splice(boards.indexOf(board), 1)
                    } else {
                        return calculateResult(board, parseInt(number))
                    }
                } else {
                    for (let i=0; i<5; i++) {
                        if (arrayColumn(board, i).join('') === 'XXXXX') {
                            console.log(board)
                            console.log('Column bingo:', boards.length)
                            if (findLoser) {
                                boards.splice(boards.indexOf(board), 1)
                            } else {
                                return calculateResult(board, parseInt(number))
                            }                        }
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

console.log("Puzzle 1:")
console.log(bingo(boards, numbers))

console.log("Puzzle 2:")
console.log(bingo(boards, numbers, true))