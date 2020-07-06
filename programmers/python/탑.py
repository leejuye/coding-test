#def solution(heights):
#    answer = [0] * len(heights) 
#    stack = [(-1, -1)] #index, heights
#    for i, h in enumerate(heights):
#        while stack[-1][1] <= h and stack[-1][1] != -1:
#            stack.pop()
#        answer[i] = stack[-1][0] + 1
#        stack.append((i, h))
#    return answer


def solution(h):
  ans = [0] * len(h)
  for i in range(len(h)-1, 0, -1):
    for j in range(len(i-1, -1, -1):
      if h[i]<h[j]:
        ans[i] = j+1
        break
return ans



# 효율성 측면에서 for문 두번보다 stack이 더 좋을 것 같긴 한데
# 이중 for 문 예쁘네
