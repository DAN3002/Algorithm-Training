long long f_z(long long a, long long b, long long c)
{
    return ((long long)sqrt(b * b + c * 4 * a) - b) / 2 / a;
}
std::vector<std::vector<int>> harderEasyProblem(std::vector<long long> p, std::vector<int> q, std::vector<int> r)
{
    int n = (int)p.size();
    vector<vector<int>> res;
    for (int i = 0; i < n; i++)
    {
        if (!q[i])
            res.push_back({r[i], (int)(p[i] / r[i])});
        else
        {
            int b = (int)f_z((long long)q[i], (long long)r[i], (long long)p[i]);
            res.push_back({(int)(p[i] / b), b});
        }
    }
    return res;
}