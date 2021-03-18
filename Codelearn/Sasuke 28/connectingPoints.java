int connectingPoints(int n)
{
    ArrayList<BigInteger> f = new ArrayList<BigInteger>();
    f.add(BigInteger.ZERO);
    f.add(BigInteger.ONE);
    for(int i = 2; i <= n; i++)
    {
        f.add(f.get(i-1).multiply(BigInteger.valueOf(i)));
    }
    n /= 2;
    return f.get(2*n).divide(f.get(n).multiply(f.get(n+1))).mod(BigInteger.valueOf(1000000007)).intValue();
}
 