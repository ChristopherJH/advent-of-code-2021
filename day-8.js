import { readFileSync } from 'fs';

let data = readFileSync("./day-8-data.txt", 'utf-8')
    .split('\n');

const data1 = data.map((element) => element.split(' | '))
const data2 = data1.map((element) => element[1])
const data3 = data2.map((element) => element.split(' '))
console.log(data3)

function countOutputDigits(data) {
    let count = 0;
    for (let i=0; i<data.length; i++) {
        for (let j=0; j<data[i].length; j++) {
            let stringLength = data[i][j].length
            if (stringLength === 2 || stringLength === 3 || stringLength === 4 || stringLength === 7) {
                count++
            }
        }
    }
    return count
}

const testData = [[ 'gbdf', 'gbfd', 'fgebac', 'dfega' ],
[ 'bcfdaeg', 'cf', 'fc', 'gecabdf' ]]
console.log(countOutputDigits(testData), 'should be 6')
console.log(countOutputDigits(data3))