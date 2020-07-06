def solution(a, b):
    days=["FRI","SAT","SUN","MON","TUE","WED","THU"]
    month=[0,31,29,31,30,31,30,31,31,30,31,30,31]
    count = b-1
    for i in range(a):
        count = count + month[i]
    answer = days[count%7]
    return answer
