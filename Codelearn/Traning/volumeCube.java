int volumeCube(long n)
{
    BigInteger cal = BigInteger.valueOf(n);
    cal = cal
    .multiply(cal.add(BigInteger.ONE))
    .divide(BigInteger.TWO)
    .modPow(BigInteger.TWO ,BigInteger.valueOf(1000000007));
 
    return cal.intValue();
}
 