const int inf = 1001;

int top, f[inf], st[inf][2], res[inf][inf];
std::vector<int> placeGarden2(std::vector<string> land, std::vector<std::vector<int>> garden)
{
    int n = (int)land.size(), m = (int)land[0].size();
    vector<int> res_arr;
    for (int i = 0; i < (int)land.size(); i++)
    {
        for (int j = 1, w, h; j <= m + 1; j++)
        {
            land[i][j - 1] == '1' ? f[j]++ : (f[j] = 0);
            for (w = 0; top > 0 && st[top][1] > f[j]; top--)
            {
                w += st[top][0];
                h = max(st[top - 1][1], f[j]);
                res[st[top][1]][w]++;
                res[h][w]--;
            }
            if (top == 0 || st[top][1] < f[j])
            {
                st[++top][0] = w + 1;
                st[top][1] = f[j];
            }
            else st[top][0] += (w + 1);
        }
    }
    for (int i = n; i > 0; i--)
    {
        for (int j = m; j > 0; j--)
	    res[i - 1][j] += res[i][j];
	for (int j = m; j > 0; j--)
	    res[i][j - 1] += res[i][j];
	for (int j = m; j > 0; j--)
	    res[i][j - 1] += res[i][j];
    }
    for (int i = 0; i < (int)garden.size(); i++)
        res_arr.push_back(res[garden[i][0]][garden[i][1]]);
    return res_arr;
}
