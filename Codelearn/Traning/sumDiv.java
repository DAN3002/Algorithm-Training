  public static int sumDiv(long n,long m)
  {
      BigInteger div = BigInteger.valueOf(m/n);
      BigInteger a = div.multiply(div.subtract(BigInteger.ONE)).divide(BigInteger.TWO).multiply(BigInteger.valueOf(n));
      BigInteger b = div.multiply(BigInteger.valueOf(m+1).subtract(BigInteger.valueOf(n).multiply(div)));
      return a.add(b).mod(BigInteger.valueOf(1000000007)).intValue();
  }
