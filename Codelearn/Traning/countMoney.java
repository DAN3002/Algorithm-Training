int countMoney(int a, int n)
{
   BigInteger mol = BigInteger.valueOf(1000000007);
   BigInteger cal = BigInteger.valueOf(a);
   cal = cal.multiply((BigInteger.TWO).pow(n).subtract(BigInteger.ONE)).mod(mol);
   return cal.intValue();
}