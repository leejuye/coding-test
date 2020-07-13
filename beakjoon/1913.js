const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(Number(line));
    if(input.length === 2) {
        solution(input[0], input[1]);
        process.exit();
    }
}).on('close', function () {
    process.exit();
});

function solution(n, findNum) {
    const answer = Array.from(Array(n), ()=> new Array(n));
    const maxValue = n*n;
    const answerPoint = {};

    let mid = Math.floor(n/2),
        current = { x: mid, y: mid, direction: 'up', value: 1, movingRange: 1, movingCount: 0 };

    while(current.value <= maxValue) {
        answer[current.y][current.x] = current.value;
        
        if(current.value == findNum) {
            answerPoint.x = current.x + 1;
            answerPoint.y = current.y + 1;
        }

        current = setNextCurrnt(current);
    }

    answer.forEach(row => {
       console.log(row.reduce((res, r) => res+= ` ${r}`));
    })
    console.log(answerPoint.y, answerPoint.x);
}

function setNextCurrnt(current) {
    let nextDirection;

    switch(current.direction) {
        case 'up':
            current.y--;
            nextDirection = 'right';
            break;
        case 'right':
            current.x++;
            nextDirection = 'down';
            break;
        case 'left':
            current.x--;
            nextDirection = 'up';
            break;
        case 'down':
            current.y++;
            nextDirection = 'left';
            break;
        default:
            break;
    }

    current.movingCount++;
    current.value++;

    if(current.movingCount >= current.movingRange) {
        current.movingCount = 0;
        if(current.direction === 'right' || current.direction === 'left' ) {
            current.movingRange++;
        }
        current.direction = nextDirection;
        
    }

    return current;
}
