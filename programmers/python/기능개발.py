# 처음 풀이

#import math 
# 올림을 하고 싶어서 사용 하지만 음수를 사용하면 바로 올림 가능

#def solution(progresses, speeds):
#    count, i = 0, 0
#    day =  math.ceil((100 - progresses[i])/speeds[i])
#    answer = []
#    while i < len(progresses):
#        if speeds[i]*day + progresses[i] >= 100:
#            count += 1
#            i += 1
#        else:
#            day += 1
#            if count:
#                answer.append(count)
#                count = 0
#    if count:
#            answer.append(count)
#            count = 0
#    return answer

