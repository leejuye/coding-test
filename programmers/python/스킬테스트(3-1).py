# 하노이탑
answer = []
def moveBlock(n, start, mid, end):
    if n == 1:
        answer.append([start, end])
        return 0
    else:
        moveBlock(n-1, start, end, mid)
        answer.append([start, end])
        moveBlock(n-1, mid, start, end)

def solution(n):
    
    start, mid, end = 1, 2, 3
    moveBlock(n, start, mid, end)
    
    return answer
