const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;
let n;
let answer = '';

const minHeap = {
    heap: [0],
    size: 0
}

rl.on('line', function (line) {
    if(n) {
        input = Number(line);

        if(input === 0) {
            answer += deleteNode() + '\n';
        } else {
            insertNode(input);
        }
    } else {
        n = Number(line);
    }
}).on('close', function () {
    console.log(answer);
    process.exit();
});

function insertNode(node) {
    let i = ++minHeap.size;

    while(true) {
        let parent = Math.floor(i/2);
        let parentValue = minHeap.heap[parent];
        if(i === 1 || Math.abs(node) > Math.abs(parentValue) 
        || (Math.abs(node) === Math.abs(parentValue) && node>parentValue)) {
            break;
        }

        minHeap.heap[i] = minHeap.heap[parent];
        i = parent;
    }
    minHeap.heap[i] = node;
}

function deleteNode() {
    if(checkEmpty()) {
        return 0;
    }

    const res = minHeap.heap[1];

    minHeap.heap[1] = minHeap.heap[minHeap.size];
    minHeap.heap[minHeap.size--] = null;

    sortHeap();

    return res;
}

function checkEmpty() {
    return minHeap.size === 0;
}

function sortHeap() {
    let i = 1;

    while(i*2 <= minHeap.size) {
        if(findMinIndex(i, i*2) === i && findMinIndex(i, i*2+1) === i) {
            break;
        }

        let minIndex = findMinIndex(i*2, i*2+1);
        swapNode(i, minIndex);
        i = minIndex;
    }
}

function findMinIndex(i, j) {
    let iAbs = Math.abs(getValue(i)),
     jAbs = Math.abs(getValue(j));

    if(iAbs < jAbs) {
        return i;
    } else if(iAbs > jAbs) {
        return j;
    }
    
    if(getValue(i) > getValue(j)) {
        return j; 
    }

    return i;
}

function getValue(index) {
    if(minHeap.size >= index) {
        return minHeap.heap[index];
    }

    return 2<<31 - 1;
}

function swapNode(i, j) {
    let tmp = minHeap.heap[i];
    minHeap.heap[i] = minHeap.heap[j];
    minHeap.heap[j] = tmp;
}
