function solution(board, moves) {
    let answer = 0, tmp, last;
    const row = [];
    const stack = [0];

    for(let i=board.length-1; i>=0; i--) {
        board[i].forEach((v, j)=>{
            if(v !== 0) {
                if(!row[j]) {                    
                    row[j] = [];
                }
                row[j].push(v);
            }
        });
    };

    moves.forEach(v=>{
        tmp = row[v-1].pop();
        if(tmp) {
            last = stack.pop();
            if(tmp === last) {
                answer += 2;
            } else {
                stack.push(last);
                stack.push(tmp);
            }
        }
    });

    return answer;
}
