const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let inputTmp, n, m, v;

rl.on('line', function (line) {
    inputTmp = line.split(' ').map( a => Number(a));
    if(inputTmp.length > 2) {
        [n, m, v] = inputTmp;
    } else {
        input.push(inputTmp);
    }
    
    if(input.length === m) {
        solution(v, input);
        process.exit();
    }
}).on('close', function () {
    process.exit();
});

const childList = {};
const visitedNode = new Map();
const dfsAnswer = []; const bfsAnswer = [];
function solution(v, input) {
    let firstNode, secondNode;
    input.forEach( node => {
        [firstNode, secondNode] = node;
        childList[firstNode]? childList[firstNode].push(secondNode)
            : childList[firstNode] = [secondNode];
        childList[secondNode]? childList[secondNode].push(firstNode)
            : childList[secondNode] = [firstNode];
    });
    sortChildList();
    doDFS(v);
    visitedNode.clear();
    doBFS(v);
    console.log(...dfsAnswer);
    console.log(...bfsAnswer);
}

function doDFS(node) {
    if(!visitedNode.has(node)) {
        dfsAnswer.push(node);
        visitedNode.set(node, true);

        childList[node] && childList[node].forEach(n => {
            doDFS(n);
        });
    } 
}

function doBFS(node) {
    const queue = [node];
    visitedNode.set(node, true);
    let parent;

    while(!isEmpty(queue)) {
        parent = queue.shift();
        bfsAnswer.push(parent);

        childList[parent] && childList[parent].forEach(n => {
            if(!visitedNode.get(n)) {
                visitedNode.set(n, true);
                queue.push(n);
            }
        })
    }
}

function isEmpty(q) {
    return q.length === 0;
}

function sortChildList() {
    for(const k in childList) {
        childList[k].sort((a,b)=>a-b);
    }
}
