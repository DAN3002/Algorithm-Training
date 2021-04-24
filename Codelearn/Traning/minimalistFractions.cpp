int minimalistFractions(std::vector<int> a)
{
    long long d=0;
    for(int i=0;i<a.size();i++)
    {
        for(int j=0;j<a.size();j++)
        {
            if(__gcd(a[i],a[j])==1) d++;
        }
    }
    return d;
}