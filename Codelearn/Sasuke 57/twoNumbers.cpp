int sumOfD(int n)
{
    int r = 0;
    while (n)
    {
        r += (n % 10);
        n /= 10;
    }
    return r;
}
bool ter(int n)
{
    vector<int> d;
    while (n)
    {
        d.push_back(n % 10);
        n /= 10;
    }
    int l = (int)d.size() - 1, s = d[l], fl = 1;
    for (int i = l - 1; i >= 0; i--)
    {
        s += d[i];
        if (d[i] < 9) fl = 0;
    }
    return (fl && s % 2);
}
std::vector<int> twoNumbers(int n)
{
    if ((n < 10 && n % 2) || ter(n)) return {-1};
    for (int i = 1; i <= n / 2; i++)
        if (sumOfD(i) == sumOfD(n - i)) 
            return {i, n - i};
    return {-1};
}
