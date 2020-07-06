def solution(a, b):
    answer = 0
    if a > b:
        a, b = b, a
    while a<=b:
        answer+=a
        a+=1
    return answer
    
# return sum(a:b+1)
# sum을 이용하는 방법 있음!
