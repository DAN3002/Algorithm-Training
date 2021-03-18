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

int n, a[10], x[10], y[10], z[10], T;

bool dfs(int i) {
    if (x[0] < 0 || y[0] < 0 || z[0] < 0) { // invalid case
        return false;
    }
    if (i > 1) { // check if last index is valid
        if (x[i - 1] + y[i - 1] + z[i - 1] > T)
            return false;
    }
    if (i == n + 1) { // final state
        return true;
    }
    if (x[0] * 9 + y[0] * 3 + z[0] < a[0]) { // can't find the solution
        return false;
    }
    int sum = a[i];
    int nx = (sum + 8) / 9; // assign to x[i]
    nx = min(nx, x[0]);
    for (; nx >= 0; nx--) {
        x[i] = nx;
        x[0] -= x[i];
        sum -= x[i] * 9;
        int ny = (sum + 2) / 3; // assign to y[i]
        if (sum <= 0)
            ny = 0;
        ny = min(ny, y[0]);
        for (; ny >= 0; ny--) {
            y[i] = ny;
            y[0] -= y[i];
            sum -= y[i] * 3;
            z[i] = max(0, sum);
            z[0] -= z[i];
            a[0] -= a[i];
            int ok = dfs(i + 1);
            if (ok)
                return true;
            a[0] += a[i];
            z[0] += z[i];
            y[0] += y[i];
            sum += y[i] * 3;
        }
        sum += x[i] * 9;
        x[0] += x[i];
    }
    return false;
}

int mutaliskAttack(std::vector<int> scvs) {
    n = sz(scvs);
    sort(scvs.begin(), scvs.end(), greater<int>());
    FOR(i, 0, n - 1) a[i + 1] = scvs[i];

    a[0] = 0;
    FOR(i, 1, n) a[0] += a[i];
    int minS = a[0] / 13;

    int l = minS, r = 41, res = 42;
    while (l <= r) {
        int m = (l + r) >> 1;
        T = x[0] = y[0] = z[0] = m;
        int ok = dfs(1);
        if (ok) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
}

