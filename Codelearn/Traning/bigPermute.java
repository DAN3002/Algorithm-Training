  int bigPermute(int n)
  {
    BigInteger a = BigInteger.ONE;
    for(int i = 1; i <= n; i++)
    {
      a = a.multiply(BigInteger.valueOf(i));
    }
    return a.mod(BigInteger.valueOf(1000000007)).intValue();
  }
