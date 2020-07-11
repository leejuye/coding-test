function solution(s){
    let countP = 0; let countY = 0;

    for(const c of s) {
        countP += c==='p'||c==='P'?1:0;
        countY += c==='y'||c==='Y'?1:0;

    }
    
    // split를 이용하는 경우
    // return s.toUpperCase().split("P").length() === s.toUpperCase().split("Y").length();
    
    // 정규식도 이용가능
    
    return countP === countY;
}
