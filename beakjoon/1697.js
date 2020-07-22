const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, k;
const MAX_LOCATION = 100000;
const counter = new Map();
const queue = [];

rl.on('line', function (line) {
    [n, k] = line.split(' ').map( a => Number(a));
    
    counter.set(n, 0);
    queue.push(n);
    solution();

    process.exit();
}).on('close', function () {
    process.exit();
});

function solution() {
    let curLocation, curCount, nextLocations;


    while(queue.length !== 0) {
        curLocation = queue.shift();
        curCount = counter.get(curLocation);

        if(curLocation === k) {
            console.log(curCount);
            return ;
        }
        nextLocations = getNextLocation(curLocation);
        nextLocations.forEach(p=> {
            counter.set(p, curCount+1);
            queue.push(p);
        });
    }
}

function getNextLocation(curLocation) {
    const res = [];
    let back = curLocation -1, front = curLocation +1, jump = curLocation *2;
    
    if(back >= 0) {
        res.push(back);
    }
    if(front <= MAX_LOCATION && front < 2*k) {
        res.push(front);
    }
    if(jump <= MAX_LOCATION) {
        res.push(jump);
    }
    return res.filter(p => !counter.has(p));
