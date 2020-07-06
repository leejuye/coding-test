# 최대값
def solution(triangle):
    tree = [[triangle[0][0]]]
    for i in range(1, len(triangle)):
        layer = []
        for j, node in enumerate(triangle[i]):
            if j == 0:
                tmp = tree[i-1][j]
            elif j == len(triangle[i])-1:
                tmp = tree[i-1][j-1]
            else:
                tmp = max(tree[i-1][j], tree[i-1][j-1])
            layer.append(tmp+node)
        tree.append(layer)
        
    return max(tree[i])
