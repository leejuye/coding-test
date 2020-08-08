const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let L, C, char;
let res = '';
const vowel = ['a', 'e', 'i', 'o', 'u'];

rl.on('line', function (line) {
    if(!L) {
        [L, C] = line.split(' ').map(a=>Number(a));
    } else {
        char = line.split(' ');
    }
}).on('close', function () {
    char.sort((a, b)=>a>b?1:-1);
    solution('', 0);

    console.log(res);
    process.exit();
});


function solution(resCase, i) {
    if(resCase.length === L) {
        if(checkResCase(resCase)) {
            res += resCase + '\n';
        }
        return ;
    }
    
    if(i < char.length) {
        solution(resCase + char[i], i+1);
        solution(resCase, i+1);
    }
}

function checkResCase(resCase) {
    let vowelCount = 0;

    for(const c of resCase) {
        if(vowel.includes(c)) {
            vowelCount++;
        }
    }
    return vowelCount > 0 && L - vowelCount > 1;
}
