#include <cstdio>
int main() {
    int money, i=0, count=0;
    int coin[]={500,100,50,10,5,1};
    scanf("%d", &money);
    money=1000-money;
    while(money){
        if(money>=coin[i]){
            money-=coin[i];
            count++;
        }
        else{
            i++;
        }
    }
    printf("%d\n", count);
    
    return 0;
}