#include <iostream>
#include <vector>
#include <string>

using namespace std;

long long maxNumber2(int a, int b){
    string s = "";
    string s1 = "";
    int k = 0;
    while (a > 0){
        s = char(a % 10 + '0') + s;
        a /= 10;
    }
    while (b > 0){
        s1 = char(b % 10 + '0') + s1;
        b /= 10;
    }
    for (int x = 0; x < s1.size(); x++){
        for (int i = k; i <= s.size(); i++){
            string p = s.substr(0, i) + s1[x] + s.substr(i, s.size() - i);
            if (p >= s){
                s = p;
                k = i + 1;
                break;
            }
        }
    }
    long long result = 0;
    for (int i = 0; i < s.size(); i++)
        result = result * 10 +( s[i] - '0');
    return result;
}

long long maxNumber(int a, int b){
    if (maxNumber2(a, b) > maxNumber2(b, a))
        return maxNumber2(a, b);
    return maxNumber2(b, a);
}
int main(){
    int a, b;
    cin >> a >> b;
    cout << maxNumber(a, b);
    return 0;
}