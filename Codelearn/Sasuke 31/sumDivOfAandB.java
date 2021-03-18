   int sumDivOfAandB(long n, long a, long b)
  {
    BigInteger mol = BigInteger.valueOf(1000000007);
    if(b % a == 0) return sumDivOfA(a,n).mod(mol).intValue();
    long gcd = GCD(a,b);
    long cal = a * (b/gcd);
    return sumDivOfA(a,n).add(sumDivOfA(b,n)).subtract(sumDivOfA(cal, n)).mod(mol).intValue();
  }
 
  long GCD(long a, long b) {
    if (b==0) return a;
    return GCD(b,a%b);
  }
 
  BigInteger sumDivOfA(long a, long n)
  {
      BigInteger b = BigInteger.valueOf(a);
      BigInteger c = BigInteger.valueOf(n);
      BigInteger div = c.divide(b);
      return div.multiply(div.add(BigInteger.ONE)).divide(BigInteger.valueOf(2)).multiply(b);
  }