int changumangu23(int n) {
    if(n < 2) return 0;

    int mol = 1000000007;
    int[] f = new int[n + 1];

    Arrays.fill(f,0);    
    f[2] = 1;
    f[3] = 1;
    for(int i = 4; i <= n; i++)
    {
        f[i] = (f[i-2] + f[i-3]) % mol;
    }

    return f[n];
}
