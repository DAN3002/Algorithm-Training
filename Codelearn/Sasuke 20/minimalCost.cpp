using namespace std;
 
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> ii;
 
#define EL printf("\n")
#define sz(A) (int)A.size()
#define FOR(i, l, r) for (int i = l; i <= r; i++)
#define FOD(i, r, l) for (int i = r; i >= l; i--)
#define faster ios_base::sync_with_stdio(false) && cin.tie(NULL)
 
// #define debug 1
 
int n, comp[55], visited[55];
vi a, c;
 
int minimalCost(std::vector<int> _c, std::vector<int> _a) {
    n = sz(_c);
    a.push_back(-1);
    c.push_back(-1);
    FOR(i, 1, n) {
        a.push_back(_a[i - 1]);
        c.push_back(_c[i - 1]);
    }
    int res = 0;
    FOR(i, 1, n) {
        if (!comp[i]) {