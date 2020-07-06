def solution(n, lost, reserve):
    selfReserve = set(reserve)&set(lost)
    lost = list(set(lost)-selfReserve)
    reserve = list(set(reserve)-selfReserve)
    answer = n-len(lost)
    for lostStudent in lost:
        for neighbor in range(lostStudent-1, lostStudent+2):
            if neighbor in reserve:
                answer+=1
                reserve.remove(neighbor)
                break
    return answer
    
    
#다른 풀이
#def solution(n, lost, reserve):
#    _lost = [l for l in lost if l not in reserve]
#    _reserve = [r for r in reserve if r not in lost]
#    for reservePerson in _reserve:
#        front, back  = reservePerson-1, reservePerson+1
#        if front in _lost:
#            _lost.remove(front)
#        elif back in _lost:
#            _lost.remove(back)
#    return n-len(_lost)

# [] 안에 for 문 넣기
# reserver 기준으로 봐서 answer에 대한 연산 줄이기
