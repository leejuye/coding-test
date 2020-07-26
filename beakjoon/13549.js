const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, k;

rl.on('line', function (line) {
    [n, k] = line.split(' ').map( a => Number(a));
    
    solution();

    process.exit();
}).on('close', function () {
    process.exit();
});

const MAX_RANGE = 100000;
const deque = new Array(MAX_RANGE * 2 + 2);
const HALF_RANGE = Math.floor(deque.length * 0.5);
const visited = new Array(MAX_RANGE + 1);
let [start, back] = [HALF_RANGE, HALF_RANGE];


function solution() {
    push_front(n, 0);
    while (true) {
        const [p, time] = pop_front();
        if (p === null) break;
        if (p === k) {
            console.log(time);
            break;
        }

        push_front(p * 2, time);
        push_back(p - 1, time + 1);
        push_back(p + 1, time + 1);
    }
}

function push_back(x, t) {
    if (!(0 <= x && x <= MAX_RANGE)) return;
    if (!visited[x]) {
        deque[--start] = [x, t];
        visited[x] = true;
    }
}
function push_front(x, t) {
    if (!(0 <= x && x <= MAX_RANGE)) return;
    if (!visited[x]) {
        deque[back++] = [x, t];
        visited[x] = true;
    }
}
function pop_front() {
    if (start >= back) return [null, null];
    return deque[--back];
}

