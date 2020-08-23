const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let n, queue, visited;

rl.on('line', function (line) {
  const tmpLine = line.split('');
  if(!checkEmpty(tmpLine)) {
    arr.push(tmpLine);
  }

}).on('close', function () {
  n = arr.length;
  solution();
  process.exit();
});

function checkEmpty(arr) {
  return arr.every(a => a === '.');
}

function solution() {
  let answer = -1, passed;
  
  do {
    const samePuyo = [];
    visited = Array.from(Array(n), ()=>Array(6));

    for(let i = 0; i<arr.length; i++) {
      for(let j = 0; j<arr[0].length; j++) {
        let count = findSamePuyo(i, j);

        if(count >= 4) {
          samePuyo.push(...queue);
        }
      }
    }

    passed = deletePuyo(samePuyo);
    answer++;
  } while(passed);

  console.log(answer);
}

function findSamePuyo(i, j) {
  if(arr[i][j] === '.' || visited[i][j]) {
      return 0;
  }

  let count = 1, start = 0;
  queue = [[i, j]];

  visited[i][j] = true;
  
  while (queue.length > start) {
    let [x, y] = queue[start++];

    for(let k=0; k<4; k++) {
      let [nx, ny] = [x+dx[k], y+dy[k]];
      
      if(nx >= n || nx < 0 || ny >= 6 || ny < 0 
        || visited[nx][ny] || arr[nx][ny] !== arr[i][j]) {
        continue;
      }

      visited[nx][ny] = true;
      count++;
      
      queue.push([nx, ny]);
    }
  }
  
  return count;
}

function deletePuyo(same) {
  if(same.length === 0) {
    return false;
  }

  const checkChanged = Array(6);

  same.forEach(([i, j])=>{
    arr[i][j] = '.';
    visited[i][j] = false;
    checkChanged[j] = true;
  });

  checkChanged.forEach((changed, j) => {
    if(changed) {
      const puyos = arr.map(a=>a[j]).filter(c=>c!=='.');
      const empty = Array.from(Array(n-puyos.length), ()=>'.');
      const newColum = empty.concat(puyos);

      arr.forEach((a, i)=>{
        a[j] = newColum[i];
      })
    }
  })

  return true;
}
