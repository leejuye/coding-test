const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;

rl.on('line', function (line) {
    if(!n) {
        [n, m] = line.split(' ').map( a => Number(a));
    } else {
        let input = line.split(' ').map( a => Number(a));
        solution(n, m, input);

        process.exit();
    }
}).on('close', function () {
    process.exit();
});

const answer = [];
let answers = '';

function solution(n, m, input) {
    input.sort((a, b) => a-b );
    backtracking(n, m, input);

    console.log(answers);
}

function backtracking(n, m, arr) {
    const answerLen = answer.length;

    if(answerLen === m) {
        answers += answer.reduce((res, a)=>res+=` ${a}`) + '\n';
        return;
    } else {
        for(const i of arr) {
            answer.push(i);
            backtracking(n, m, arr);
            answer.pop();
        }
   }
}
