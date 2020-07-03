function solution(arr) {
    let answer = 0;
    let leftCount = 0;
    let isLaser = false;
    
    for(const a of arr) {
        if(a === '(') {
            leftCount++;
            isLaser = true;
        } else {
            leftCount--;
            if(isLaser) {
                answer+=leftCount;
            } else {
                answer++;
            }
            isLaser = false;
        }
    }
    
    return answer;
}