#include <string>
#include <vector>
#include <iostream>
//#include <sstream>

using namespace std;

vector<string> solution(int init, int times) {
	vector<string> answer;
	char pre;
	string arr = to_string(init);
	string tmp; //vector<char> tmp; std::ostringstream oss;
	int cou;

	for (int t = 0; t<times; t++) {
		pre = arr.at(0); cou = 0;
		tmp="";//tmp.clear(); oss.str(""); oss.clear();
		for (int i = 0; i < arr.length(); i++) {
			if (pre == arr.at(i)) cou++;
			else {
				tmp += pre; tmp += cou+'0'; //tmp.push_back(pre); tmp.push_back(cou + '0');
				pre = arr.at(i); cou = 1;
			}
		}
		tmp += pre; tmp += cou+'0'; //tmp.push_back(pre); tmp.push_back(cou + '0');
		answer.push_back(tmp); //for (char c : tmp) oss << c; answer.push_back(oss.str()); arr = oss.str();
		arr = tmp;
	}
	return answer;
}
int main() {
	int init, times;
	cin >> init >> times;
	vector<string> arr = solution(init, times);
	for (string s : arr) cout << s << endl;
}
