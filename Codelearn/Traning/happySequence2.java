int happySequence2(int n)
{
    if(n == 0) return 0;

    boolean[] map = new boolean[n + 1];
    Arrays.fill(map, true);
    int count = 1;

    for(int i = 2; i <= n; i++)
    {
        if(map[i])
        {
            count++;
            for(int j = i * 2; j <= n; j += i) map[j] = false;
        } else if(n % i == 0) count++;
    }

    return count;
}
