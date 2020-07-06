def solution(people, limit):
    answer = 0
    start, end = 0, len(people)-1
    people.sort()
    
    while people[end] >= limit:
        end-=1
        answer+=1
    
    while end >= start:
        tmp = people[end]
        end-=1
        while tmp + people[start] <= limit:
            tmp+=people[start]
            start+=1
            if start > end: break
        answer+=1
                
    return answer
