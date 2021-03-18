std::vector<int> roboPosition(string run)
{
    int dy[] = {1, 0, -1, 0};
    int dx[] = {0, 1, 0, -1};
    int cur = 0, direct = 0, ansx = 0, ansy = 0;
    vector<int> ans ={};
    while(cur < run.size())
    {
        if(run[cur] == ',')
        {
            cur++;
            continue;
        }
        string cc = run.substr(cur, 2);
        if(cc == "Go")
        {
            cur += 3;
            int val = 0;
            while(cur < run.size() && run[cur] >= '0' && run[cur] <= '9')
            {
                val = val * 10 + run[cur] - '0';
                cur++;
            }
            ansx += dx[direct] * val;
            ansy += dy[direct] * val;
        }
        else if(cc == "TB") 
        {
            direct += 2;
            direct %= 4;
            cur +=3;
        }
        else if(cc == "TR")
        {
            direct++;
            direct %= 4;
            cur += 3;
        }
        else if(cc == "TL")
        {
            direct--;
            direct = (direct + 4) % 4;
            cur += 3;
        }
    }
    ans.push_back(ansx);
    ans.push_back(ansy);
    return ans;
}
