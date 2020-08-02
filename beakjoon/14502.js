const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, count, res, lab;
const laboratory = [];
const empty = [];
const virus = [];
const wallCase = [];

rl.on('line', function (line) {
    if(n) {
        let tmp = line.split(' ').map(a=>Number(a));
        laboratory.push(tmp);
    } else {
        [n, m] = line.split(' ').map(a=>Number(a));
    }
}).on('close', function () {
    solution();

    process.exit();
});

function solution() {
    laboratory.forEach((line, i)=>{
        line.forEach((a, j) => {
            if(a === 0) {
                empty.push([i, j]);
            } else if(a === 2) {
                virus.push([i, j]);
            }
        });
    });

    getMinCase();
    console.log(res);
}


function getMinCase() {
    if(wallCase.length === 3) {
        lab = copyLaboratory();
        wallCase.forEach(place=>{
            let [x, y] = empty[place];
            lab[x][y] = 1;
        });

        let tmp = getEmptyCount(lab);
        if(!res || res<tmp) {
            res = tmp;
        }
        return;
    }

    for(let i=0; i<empty.length; i++) {
        let length = wallCase.length;
        if(!wallCase.includes(i)
            && (length === 0 || wallCase[length-1] < i)) {
            wallCase.push(i);
            getMinCase();
            wallCase.pop();
        }
    }
}

function copyLaboratory() {
    let res = [];
    laboratory.forEach(line=>{
        res.push([...line]);
    });

    return res;
}

function getEmptyCount() {
    count = 0;

    virus.forEach(place=>{
        updateNearPlace(...place);
    });

    return empty.length - count - 3;
}

function updateNearPlace(x, y) {
    updateLab(x+1, y);
    updateLab(x-1, y);
    updateLab(x, y+1);
    updateLab(x, y-1);
}

function updateLab(x, y) {
    if(x<0 || x>=n || y<0 || y>=m) {
        return ;
    }

    if(lab[x][y] === 0) {
        lab[x][y] = 2;
        count++;
        updateNearPlace(x, y);
    }
}
