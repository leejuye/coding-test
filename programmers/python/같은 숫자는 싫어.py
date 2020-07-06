# 내 풀이
def solution(arr):
    i = 0
    answer=[arr[i]]
    for A in arr:
        if answer[i] != A:
            answer.append(A)
            i+=1
    return answer
    
# 수정한 풀이
def solution(arr):
    answer = []
    for a in arr:
        if answer[-1:] != [a]:  #-1 인덱스를 넣어도 된다.
                                # 부분 리스트로도 같다 다르다를 비교할 수 있다.
            answer.append(a)
    return answer
    
