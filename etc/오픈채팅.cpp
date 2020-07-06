#define _CRT_SECURE_NO_WARNINGS
#include <string>
#include <vector>
#include <iostream>
#include <map>
#include <string.h>

using namespace std;

map<string, string> member;
vector<string> actionRecord;
vector<string> idRecord;

void inputRecord(string action, string userId) {
	actionRecord.push_back(action);
	idRecord.push_back(userId);
}

void changeNickname(string userId, string nickname) {
	member.erase(userId);
	member.insert(map<string, string>::value_type(userId, nickname));
}

vector<string> tok(string s, string delimiter) {
	vector<string> res;
	char *str = const_cast<char *>(s.c_str());
	char *tok;
	tok = std::strtok(str, delimiter.c_str());
	while (tok != NULL) {
		res.push_back(tok);
		tok = std::strtok(NULL, delimiter.c_str());
	}
	return res;
}
vector<string> print() {
	char buff[100];
	vector<string> answer;
	int i = 0;
	char name[11];
	for (string v : idRecord) {
		strcpy(name, member[v].c_str());
		if (actionRecord[i].compare("Enter") == 0)
			sprintf(buff, "%s님이 들어왔습니다.", name);
		else sprintf(buff, "%s님이 나갔습니다.", name);
		answer.push_back(buff);
		i++;
	}
	return answer;
}

void inputValue(string inp) {
	vector<string> value = tok(inp, " ");
	string action, id, nickname;      
	if (value.size()>0)action = value[0];
	if (value.size()>1)id = value[1];
	if(value.size()>2) nickname = value[2];
	if (action.compare("Enter") == 0) {
		inputRecord(action, id);
		if ((member.find(id) == member.end())) {
			member.insert(map<string, string>::value_type(id, nickname));
		}
		else {
			changeNickname(id, nickname);
		}
	}
	if (action.compare("Leave") == 0) {
		inputRecord(action, id);
	}
	else if (action.compare("Change") == 0) {
		changeNickname(id, nickname);
	}
}

vector<string> getValue(string inp) {
	vector<string> res;
	res = tok(inp, ",[]\"");
	return res;
}

int main() {
	string inp;
	getline(cin, inp);
	vector<string >record = getValue(inp);
	for (string s : record) {
		inputValue(s);
	}
	for (string s : print()) {
		cout << s << endl;
	}
}
