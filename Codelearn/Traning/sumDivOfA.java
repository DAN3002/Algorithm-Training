  public static int sumDivOfA(String a, String n)
  {
    BigInteger b = new BigInteger(a);
    BigInteger c = new BigInteger(n);
    BigInteger div = c.divide(b);
    return div.multiply(div.add(BigInteger.ONE)).divide(BigInteger.TWO).multiply(b).mod(BigInteger.valueOf(1000000007)).intValue();
  }
