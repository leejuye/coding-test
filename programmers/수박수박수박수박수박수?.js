function solution(n) {
    let answer = "";
    for(let i=0; i<n; i++) {
        answer+= i%2===0? '수':'박';
    };
    // 다른 풀이
    // answer = '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
    
    return answer;
}
