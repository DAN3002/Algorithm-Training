void traverse(int u, vector<bool> &v, vector<vector<int>> path)
{
    v[u] = true;
    for (int i = 0; i < (int)v.size(); i++)
        if (path[u][i] && !v[i]) traverse(i, v, path);
}

int perfectDreamPath(vector<vector<int>> path)
{
    int n = (int)path.size();
    vector<bool> vis(n);
    vector<int> oP;
    for (int i = 0; i < n; i++) vis[i] = false;
    traverse(0, vis, path);
    for (int i = 0; i < n; i++)
        if (!vis[i]) return -1;
    for (int i = 0; i < n; i++)
    {
        int s = 0;
        for (int j = 0; j < n; j++) s += path[i][j];
        if (s % 2)
            oP.push_back(i);
    }
    if (oP.size() < 4)
    {
        if (!oP.size()) return 1;
        else return oP[0] + 1;
    }
    return -1;
}

