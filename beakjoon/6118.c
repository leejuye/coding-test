#define _CRT_SECURE_NO_WARNINGS
#include <cstdio>
#include <queue>
#include <vector>

using namespace std;;
vector<vector<int>> v;
vector<int>visit;
queue<int> q;

int check() {
	int x = q.front();
	q.pop();
	for (int i = 0; i < v[x].size(); i++) {
		if (visit[v[x][i]]) continue;
		visit[v[x][i]] = visit[x] + 1;
		q.push(v[x][i]);
	}
	if (q.empty()) return visit[x];
	return check();
}


int main() {
	int n, m, t1, t2, max, res = 50001, cou = 0;
	
	scanf("%d%d", &n, &m);
	visit.resize(n+1);
	v.resize(n + 1);
	for (int i = 0; i < m; i++) {
		scanf("%d%d", &t1, &t2);
		v[t1].push_back(t2);
		v[t2].push_back(t1);
	}
	q.push(1);
	visit[1] = 1;
	max = check();

	for (int i = 1; i <= n; i++) {
		if (visit[i] == max) {
			cou++;
			if(res>i)res = i;
		}
	}
	printf("%d %d %d\n", res, max-1, cou);
}