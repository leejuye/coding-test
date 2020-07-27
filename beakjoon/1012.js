const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let t, m, n, k, res;
let cabbages

rl.on('line', function (line) {
    if(!t) {
        t = Number(line);
    } else {
        if(!m) {
            [m, n, k] = line.split(' ').map( a => Number(a));
            cabbages = Array.from(Array(n), ()=> new Array(m));
        } else {
            [x, y] = line.split(' ').map( a => Number(a));
            cabbages[y][x] = true;
            if(--k === 0) {
                solution();
                m = false;
                
                if(--t === 0) {
                    process.exit();
                }                
            }
        }
    }
}).on('close', function () {
    process.exit();
});

function solution() {
    res = 0;

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(cabbages[i][j]) {
                res++;
                findCabbagesGroup(i, j);
            }
        }
    }
    console.log(res);
}

function findCabbagesGroup(i, j) {
    if(i<0 || i>=n || j<0 || j>=m ) {
        return;
    }
    if(cabbages[i][j]) {
        cabbages[i][j] = false;
        findCabbagesGroup(i-1, j);
        findCabbagesGroup(i+1, j);
        findCabbagesGroup(i, j-1);
        findCabbagesGroup(i, j+1);
    }
}
