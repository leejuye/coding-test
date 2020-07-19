const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;

rl.on('line', function (line) {
    [n, m] = line.split(' ').map( a => Number(a));
    
    solution(n, m);
    process.exit();
}).on('close', function () {
    process.exit();
});

const answer = new Array(n);
let answers = '';

function solution(n, m) {
    backtracking(0, n, m);

    console.log(answers);
}

function backtracking(index, n, m) {
    if(index === m) {
        answers += answer.reduce((res, a)=>res+=` ${a}`) + '\n';
        return;
    } else {
        for(let i=1; i<=n; i++) {
            if(index === 0 || answer[index-1] <= i) {
                answer[index] = i;
                backtracking(index+1, n, m);
            }
        }
   }
}
