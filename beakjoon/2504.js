const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr;

rl.on('line', function (line) {
    arr = line.split('');
    solution();
    process.exit();
}).on('close', function () {
    process.exit();
});

function solution() {
    const stack = [];
    let tmp = 1, answer = 0;

    arr.some((a, i)=> {
        if(isClosed(a)) {
            let last = stack.pop();
            if(!(last && isPair(last, a))) {
                answer = 0;
                return true;
            }
            if(isPair(arr[i-1], a)) {
                answer += tmp;
            }
            tmp /= getNumber(a);
        } else {
            tmp *= getNumber(a);
            stack.push(a);
        }
    })

    if(stack.length !== 0) {
        answer = 0;
    }

    console.log(answer);
    return;
}


function isClosed(a) {
    if(a === ')' || a ===']') {
        return true;
    }

    return false;
}

function isPair(a, b) {
    if((a === '(' && b === ')') 
    || (a === '[' && b === ']')) {
        return true;
    }  

    return false;
}

function getNumber(a) {
    if(a === '(' || a === ')') {
        return 2;
    }
    return 3;
}
