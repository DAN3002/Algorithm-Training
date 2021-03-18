int n, w, h;
map<vector<pair<int, int>>, bool> mp;
queue<vector<pair<int, int>>> q;
 
vector<pair<int, int>> xoay(const vector<pair<int, int>> &a)
{
    vector<pair<int, int>> ans(0);
    int minx = INT_MAX;
    int miny = INT_MAX;
    for(auto i: a)
    {
        ans.emplace_back(-i.second, i.first);
        minx = min(minx, -i.second);
        miny = min(miny, i.first);
    }
    for(auto &i: ans)
    {
        i.first += -minx;
        i.second += -miny;
    }
    sort(ans.begin(), ans.end());
    return ans;
}
 
vector<pair<int, int>> lat(const vector<pair<int, int>> &a)
{
    vector<pair<int, int>> ans(0);
    int minx = INT_MAX;
    int miny = INT_MAX;
    for(auto i: a)
    {
        ans.emplace_back(i.first, -i.second);
        minx = min(minx, i.first);
        miny = min(miny, -i.second);
    }
    for(auto &i: ans)
    {
        i.first += -minx;
        i.second += -miny;
    }
    sort(ans.begin(), ans.end());
    return ans;
}
 
vector<pair<int, int>> TT(const vector<pair<int, int>> &a)
{
    vector<pair<int, int>> ans(0);
    int minx = INT_MAX;
    int miny = INT_MAX;
    for(auto i: a)
    {
        ans.emplace_back(i.first, i.second);
        minx = min(minx, i.first);
        miny = min(miny, i.second);
    }
    bool d1 = 1, d2 = 1;
    for(auto &i: ans)
    {
        i.first += -minx;
        i.second += -miny;
        d1 &= (i.first < w && i.second < h);
        d2 &= (i.first < h && i.second < w);
    }
    if(!(d1 | d2)) ans = {{-1, -1}};
    sort(ans.begin(), ans.end());
    return ans;
}
 
int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};
int fitRectangle(int n, int w, int h)
{
    ::n = n;
    ::w = w;
    ::h = h;
    if(w * h < n) return 0;
    vector<pair<int, int>> cc = {{0, 0}};
    int cnt = 1, ans = 0;
    q.push(cc); 
    while(q.size())
    {
        auto u = q.front();
        q.pop();
        if(u.size() == n)
        {
            ans++;
            continue;
        }
        for(auto j: u)
        {
            for(int id = 0; id < 4; id++)
            {
                int newx = j.first + dx[id];
                int newy = j.second + dy[id];
                bool trung = 0;
                for(auto i: u)
                {
                    if(i == make_pair(newx, newy)) 
                    {
                        trung = 1;
                        break;
                    }
                }
                if(trung) continue;
                vector<pair<int, int>> newvt = u;
                newvt.emplace_back(newx, newy);
                newvt = TT(newvt);
                if(newvt[0] == make_pair(-1, -1)) continue;
                if(mp[newvt] == 0)
                {
                    mp[newvt] = 1;
                    q.push(newvt);
 
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
 
                    newvt = lat(newvt);
                    mp[newvt] = 1;
 
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
                    newvt = xoay(newvt);
                    mp[newvt] = 1;
                } 
            }
        }
    } 
    return ans;    
}
