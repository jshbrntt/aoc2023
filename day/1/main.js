const fs = require('fs/promises');

const WORDS = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];

const convertWordToNumber = word => WORDS.indexOf(word) + 1;

(async() => {
    const input = (await fs.readFile('./input')).toString();
    const lines = input.split('\n');
    let sum = 0;
    for (const line of lines) {
        const numbers = [];
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const number = Number.parseInt(char);
            if (!Number.isNaN(number)) {
                numbers.push(number);
            }
            for (const word of WORDS) {
                if (word === line.slice(i, i + word.length)) {
                    numbers.push(convertWordToNumber(word));
                    break;
                }
            }
        }
        const first = numbers[0].toString();
        const last = numbers[numbers.length - 1].toString();
        const number = Number.parseInt(first + last);
        sum = sum + number;
    }
    console.log(sum)
})();
