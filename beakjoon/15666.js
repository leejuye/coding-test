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
let answers = [];

function solution() {
    input.sort((a, b) => a-b );
    backtracking(0);

    const setAnswer = new Set(answers);
    let res = '';
    setAnswer.forEach(a=>{
        res+=a+'\n';
    });
    console.log(res);
}

function backtracking(v) {
    if(v === m) {
        answers.push(answer.join(' '));
        return;
    }
    
    input.forEach((val) => {
        if(v === 0 || answer[v-1] <= val) {
            answer[v] = val;
            backtracking(v+1);
        }
    });
}
