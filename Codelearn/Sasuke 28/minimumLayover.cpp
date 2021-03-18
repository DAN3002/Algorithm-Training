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

struct edge {
    int u, v, c;
    bool operator<(const edge &o) const {
        return c < o.c;
    }
};

int n, useA[15], useB[15];
vector<ii> ta, tb;
int a[15][15], b[15][15];
int res;
vector<edge> ea, eb;
vector<vi> orders;
vi st;

int inputTime(stringstream &ss) {
    int x = 0;
    string s = "";
    ss >> x >> s;
    if (s == "AM") {
        if (x == 12)
            x = 0;
    } else {
        if (x < 12)
            x += 12;
    }
    return x;
}

void parse(vector<string> sa, vector<ii> &a) {
    for (string s : sa) {
        stringstream ss(s);
        ii t;
        t.first = inputTime(ss);
        string k;
        ss >> k;
        t.second = inputTime(ss);
        a.push_back(t);
    }
}

int getTime(int x, int y) { // 0 <= x,y < 24
    int t = y - x >= 0 ? y - x : 24 - x + y;
    int res = t >= 5 ? t : t + 24;
    return res;
}

void init() {
    n = sz(ta);
    FOR(i, 0, n - 1) FOR(j, 0, n - 1) {
        a[i][j] = getTime(ta[i].second, tb[j].first);
        b[i][j] = getTime(tb[i].second, ta[j].first);
        ea.push_back({i, j, a[i][j]});
        eb.push_back({i, j, b[i][j]});
    }
    sort(ea.begin(), ea.end());
    sort(eb.begin(), eb.end());

    res = 1e9;
    st.clear();
    orders.clear();
}

void gen(int idx, int last) {
    if (idx == n / 2) {
        orders.push_back(vi(st));
        return;
    }
    int maxIdx = n / 2 - idx - 1;
    FOR(i, last + 1, n - 1 - maxIdx) {
        st.push_back(i);
        gen(idx + 1, i);
        st.pop_back();
    }
}

void solve(vi oa, vi ob) {
    int ans = 0;
    FOR(i, 0, n - 1) useA[i] = useB[i] = 0;
    for (edge e : ea) {
        int i = e.u, j = e.v, c = e.c;
        if (useA[i] || useB[j])
            continue;
        int oka = 0, okb = 0;
        for (int x : oa) {
            if (i == x)
                oka = 1;
        }
        if (!oka)
            continue;
        for (int x : ob) {
            if (j == x)
                okb = 1;
        }
        if (!okb)
            continue;
        useA[i] = useB[j] = 1;
        ans += c;
        if (ans >= res)
            return;
    }
    for (edge e : eb) {
        int i = e.v, j = e.u, c = e.c;
        if (useA[i] || useB[j])
            continue;
        useA[i] = useB[j] = 1;
        ans += c;
        if (ans >= res)
            return;
    }
    res = min(res, ans);
}

int minimumLayover(vector<string> sa, vector<string> sb) {
    parse(sa, ta);
    parse(sb, tb);
    init();
    gen(0, -1);
    for (vi x : orders) {
        for (vi y : orders) {
            solve(x, y);
        }
    }
    return res;
}
