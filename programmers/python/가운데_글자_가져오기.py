def solution(s):
    isEven, mid = len(s)%2, int(len(s)/2)
    midStart, midEnd = mid-1+isEven, mid+1
    answer = s[midStart:midEnd]
    return answer
    
# 다른 풀이
def solution(s):
    return s[(len(s)-1)//2:(len(s)+2)//2]
    # //: 내림 연산자
