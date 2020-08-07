const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let r, c, field = [];

rl.on('line', function (line) {
    if(!r) {
        [r, c] = line.split(' ').map(a=>Number(a));
    } else {
        field.push(line.split(''));
    }
}).on('close', function () {
    solution();

    process.exit();
});


const dx = [-1, 0, 1, 0, 0];
const dy = [0, 1, 0, -1, 0];

function solution() {
    let [wolf, sheep] = [0, 0];

    field.forEach((line, i)=>{
        line.forEach((x, j)=>{
            if(x !== '#') {
                let [tmpSheep, tmpWolf] = findWolfAndSheep(i, j);
                wolf += tmpWolf>=tmpSheep ? tmpWolf : 0;
                sheep += tmpWolf<tmpSheep ? tmpSheep : 0;
            }
        })
    })

    console.log(sheep, wolf);
    return;
}

function findWolfAndSheep(i, j) {
    const queue = [[i, j]];
    let tmpWolf = 0, tmpSheep = 0; 

    while(queue.length > 0) {
        let [x, y] = queue.shift();

        for(let n=0; n<5; n++) {
            let [nx, ny] = [x+dx[n], y+dy[n]];

            if(nx >= r || nx < 0 || ny >=c || ny < 0 || field[nx][ny] === '#') {
                continue;
            }

            if(field[nx][ny] === 'v') {
                tmpWolf++;
            } else if(field[nx][ny] === 'o') {
                tmpSheep++;
            }

            field[nx][ny] = '#';
            queue.push([nx, ny]);
        }
        
    }

    return [tmpSheep, tmpWolf];
}
