// Java
boolean check(int x) {
    if (x % 10 == 0) return false;
    int t = 0, y = x;
    while (y > 0)
    {
        t = t * 10 + y % 10;
        y /= 10;
    }
    int s = x + t;
    while (s > 0)
    {
        if ((s % 10) % 2 == 0) return false;
        s /= 10;
    }
    return true;
}
int goodReverseNumbers(int n) {
    int[] a = {0, 0, 20, 100, 600, 0, 18000, 50000, 540000, 0};
    int d = 0, m = n, res = 0, lb = 1, ub = 10;
    while (m > 0)
    {
        ++d;
        m /= 10;
        if (d != 1)
        {
            lb *= 10;
            ub *= 10;
        }
    }
    for (int i = 0; i < d; ++i) res += a[i];
    if (d == 1 || d > 8) return res;
    int ha = (lb + ub) / 2;
    if (n < ha)
    {
        for (int i = lb; i <= n; ++i)
            if (check(i)) ++res;
    }
    else
    {
        res += a[d];
        for (int i = n + 1; i < ub; ++i)
            if (check(i)) --res;
    }
    return res;
}
