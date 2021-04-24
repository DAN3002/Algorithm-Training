std::vector<int> arithmeticProgression(std::vector<int> a)
{
    if(a.size() <= 2) return a;
    vector<int> out(0);
    for(int i = 0; i < a.size() - out.size(); i++)
    {
        int d = a[i+1] - a[i];
        int j = 0;
        for(j = i + 2; j <= a.size(); j++)
        {
            if(j == a.size() || a[j] - d != a[j-1]) 
            {
                j = j - 1;
                break;
            }            
        }
        vector<int> other = vector<int>(a.begin() + i, a.begin() + j + 1);
        if(out.size() < other.size())
        {
            out = other;
        }        
    }
    return out;
}
 