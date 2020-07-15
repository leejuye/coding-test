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

const answers = [];
const tmpAnwer = [];

function solution(n, m) {
    backtracking(n, m);

    answers.forEach( a => {
        console.log(...a);
    });
}

function backtracking(n, m) {
    if(tmpAnwer.length == m) {
        answers.push([...tmpAnwer]);
        return;
    } else {
        for(let i=1; i<=n; i++) {
            if(!tmpAnwer.includes(i)) {
                tmpAnwer.push(i);
                
                backtracking(n, m, tmpAnwer);
                tmpAnwer.pop();
            }
        }
    }
}
