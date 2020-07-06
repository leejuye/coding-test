#include <string>
#include <vector>
#include <iostream>
using namespace std;
#define BLOCK 7
#define BLOCKROW 2
#define BLOCKCOL 4
#define FIELDROW 12
#define FIELDCOL 8

char block[BLOCK][BLOCKROW][BLOCKCOL] = {
	{ { 0,0,0,0 },{ 'A','A','A','A' } },
{ { 'B','B','B',0 },{ 0,'B',0,0 } },
{ { 'C','C',0,0 },{ 'C','C',0,0 } },
{ { 'D','D',0,0 },{ 0,'D', 'D', 0 } },
{ { 0,'E', 'E', 0 },{ 'E', 'E', 0,0 } },
{ { 'F', 'F', 'F', 0 },{ 0,0,'F', 0 } },
{ { 0,0,'G', 0 },{ 'G', 'G', 'G', 0 } }
};
char field[FIELDROW][FIELDCOL] = { 0 };
void print() {
	int i, j;
	for (i = 0; i < FIELDROW; i++) {
		for (j = 0; j <FIELDCOL; j++) {
			if (field[i][j] == 0) cout << '.';
			else cout << field[i][j];
		}
		cout << endl;
	}
}
void addBlock(int blockType, int idx, int height) {
	int i, j;
	for (i = 0; i < BLOCKROW; i++) {
		for (j = 0; j < BLOCKCOL; j++) {
			if (field[height + i][idx + j] == 0) field[height + i][idx + j] = block[blockType][i][j];
		}
	}
}
bool checkBlock(int blockType, int idx, int height) {
	int i, j;
	for (i = 0; i<BLOCKROW; i++) {
		for (j = 0; j<BLOCKCOL; j++) {
			if (field[height + i][idx + j] != 0 && block[blockType][i][j] != 0) return false;
		}
	}
	return true;
}
bool setBlock(int blockType, int idx) {
	int i;
	for (i = 0; i < FIELDROW - 1; i++) {
		if (!checkBlock(blockType, idx, i)) {
			addBlock(blockType, idx, i - 1);
			break;
		}
	}
	if (i == 0) {
		cout << "GAME OVER" << endl;
		return false;
	}
	if (i == FIELDROW - 1) addBlock(blockType, idx, i - 1);
	return true;
}
vector<string> editInput(string s) {
	string tmp;
	vector<string> res;
	for (int i = 0; i < s.length(); i++) {
		if (s.at(i) >= 'A'&&s.at(i) <= 'G') {
			tmp = s.substr(i, 2);
			cout << tmp << endl;
			res.push_back(tmp);
		}
	}
	return res;
}
int main() {
	string inp;
	getline(cin, inp);
	cout << inp << endl;
	vector<string> inputBlock;
	inputBlock = editInput(inp);
	for (string s : inputBlock)
	{
		if (!setBlock(s.at(0) - 'A', s.at(1) - '0' - 1)) break;
		print();
		cout << "=============" << endl;
	}
	return 0;
}