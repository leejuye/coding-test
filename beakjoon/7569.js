const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, h, countZ = 0, i = 0, k = 0, start = 0;
let tomatoes;
const queue = [];
const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, -1, 0, 1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

rl.on('line', function (line) {
    if(n) {
        line.split(' ').forEach((a, j)=>{
            if(a === '0') { 
                countZ++;
            } else if(a === '1') {
                queue.push([i, j, k]);
            }
            tomatoes[i][j][k] = Number(a);
        });

        i++;
        if(i === m) {
            i = 0;
            k++;
        }
    } else {
        [n, m, h] = line.split(' ').map(a=>Number(a));
        tomatoes = Array(m).fill(null).map(()=>Array(n).fill(null).map(()=>Array(h)));
    }
}).on('close', function () {
    solution();

    process.exit();
});



function solution() {
    if(countZ === 0) {
        console.log(0);
        return;
    }

    const counter = Array(m).fill(null).map(()=>Array(n).fill(null).map(()=>Array(h)));
    queue.forEach(([i, j, k]) => {
        counter[i][j][k] = 0;
    });
    
    while(queue.length > start) {
        let [x, y, z] = queue[start++];
        let count = counter[x][y][z];
        for(let i=0; i<6; i++) {
            let [nx, ny, nz] = [x+dx[i], y+dy[i], z+dz[i]];
            
            if(nx>=m || ny>=n || nz>=h || nx<0 || ny<0 || nz<0) {
                continue;
            }

            if(tomatoes[nx][ny][nz] === 0) {
                if(--countZ === 0) {
                    console.log(count + 1);
                    return;
                }

                tomatoes[nx][ny][nz] = 1;
                counter[nx][ny][nz] = count + 1;

                queue.push([nx, ny, nz]);
            }
        }
    }

    console.log(-1);
    return;
}
