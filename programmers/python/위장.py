def solution(clothes):
    answer = 1
    count = {}
    for cloth, category in clothes: # 배열일 때 이렇게 접근도 가능
        if category in count:
            count[category] += 1
        else:
            count[category] = 1
    for i in count:
        answer *= (count[i]+1)
    return answer-1
