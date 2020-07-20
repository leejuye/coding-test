const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, input;

rl.on('line', function (line) {
    if(!n) {
        [n, m] = line.split(' ').map( a => Number(a));
    } else {
        input = line.split(' ').map( a => Number(a));
        solution(n, m, input);

        process.exit();
    }
}).on('close', function () {
    process.exit();
});

const answer = new Array(n);
const visited = Array.apply(null, new Array(9)).map(Boolean.prototype.valueOf, false);
let answers = [];
let tmpAnswer;

function solution() {
    input.sort((a, b) => a-b );
    backtracking(0);

    const setAnswer = new Set(answers);
    setAnswer.forEach(s =>
        console.log(s)
    );
}

function backtracking(v) {
    if(v === m) {
        answers.push(answer.join(' '));
        return;
    }
    
    input.forEach((val, i) => {
        if(!visited[i]) {
            visited[i] = true;
            answer[v] = val;
            backtracking(v+1);
            visited[i] = false;
        }
    });
}
