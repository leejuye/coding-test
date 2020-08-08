const readline = require('readline');
const { compileFunction } = require('vm');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, i = 0;
const sea = [];
const shark = {
    position: null,
    size: 2,
    count: 0,
    eatenFish: 0
};

rl.on('line', function (line) {
    if(!n) {
        n = Number(line);
    } else {
        sea.push(line.split(' ').map((a, j)=>{
            let numA = Number(a);
            if (numA === 9) {
                shark.position = [i, j];
                numA = 0;
            }
            
            return numA;
        }));
        
        i++;
    }
}).on('close', function () {
    solution();

    process.exit();
});

function solution() {
    while(true) {
        if(findTimeForFish()) {
            console.log(shark.count);
            return;
        }
    }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function findTimeForFish() {
    const queue = [];
    const count = Array.from(Array(n), ()=>Array(n));
    let start = 0;
    let nextPosition, min;

    count[shark.position[0]][shark.position[1]] = 0;
    queue.push(shark.position);

    while(queue.length > start) {
        let [i, j] = queue[start++];
        if(min && count[i][j] > min) {
            break;
        }
    
        if(sea[i][j] < shark.size && sea[i][j] !== 0) {
            if (!min || count[i][j] < min ||
                (count[i][j] === min && (i < nextPosition[0] 
                    || i === nextPosition[0] && j < nextPosition[1]))) {
                min = count[i][j];
                nextPosition = [i, j];
            }
        }

        for(let m = 0; m<4; m++) {
            let [mi, mj] = [i+dx[m], j+dy[m]];

            if(mi>=n || mi<0 || mj>=n || mj<0
                || sea[mi][mj] > shark.size || count[mi][mj]) {
                continue;
            }

            count[mi][mj] = count[i][j] + 1;
            queue.push([mi, mj]);
        } 
    }

    if(!nextPosition) {
        return true;
    }

    shark.position = nextPosition;
    if(++shark.eatenFish == shark.size) {
        shark.size++;
        shark.eatenFish = 0;
    }
    sea[nextPosition[0]][nextPosition[1]] = 0;
    shark.count += min;
    return false;
}
