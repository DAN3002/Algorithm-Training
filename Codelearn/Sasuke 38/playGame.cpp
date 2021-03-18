#include <bits/stdc++.h>

using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> ii;

#define EL printf("\n")
#define sz(A) (int)A.size()
#define FOR(i, l, r) for (int i = l; i <= r; i++)
#define FOD(i, r, l) for (int i = r; i >= l; i--)
#define faster ios_base::sync_with_stdio(false) && cin.tie(NULL)

// #define debug 1

const int inf = 1e9;
string s;
int n, m;
int dd[105][55][2][250], res;

#define p(cur) (cur + 105)
#define move(dir, cur) (dir == 0 ? cur - 1 : cur + 1)

void solve(int idx, int used, int dir, int cur) {
    if (idx > m || used > n || dd[idx][used][dir][p(cur)])
        return;

    dd[idx][used][dir][p(cur)] = 1;
    if (idx == m && used == n) {
        res = max(res, abs(cur));
        return;
    }
    bool isF = s[idx] == 'F';
    // use at idx
    if (isF) {
        solve(idx + 1, used + 1, dir ^ 1, cur);
    } else {
        solve(idx + 1, used + 1, dir, move(dir, cur));
    }
    // don't use at idx
    if (isF) {
        solve(idx + 1, used, dir, move(dir, cur));
    } else {
        solve(idx + 1, used, dir ^ 1, cur);
    }
    // use 2 times here
    solve(idx, used + 2, dir, cur);
}

int playGame(string _s, int _n) {
    m = sz(_s);
    s = _s;
    n = _n;
    int cnt = 0;
    for (char c : s) cnt += c == 'T';
    if (n >= cnt) {
        return m - ((n - cnt) % 2);
    }
    solve(0, 0, 1, 0);
    return res;
}
