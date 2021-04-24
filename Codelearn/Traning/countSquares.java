int countSquares(long m, long n)
{
    BigInteger min = BigInteger.valueOf(Math.min(m,n));
    BigInteger max = BigInteger.valueOf(Math.max(m,n));
 
    BigInteger cal1 = min.multiply(min.add(BigInteger.ONE)).multiply(min.multiply(BigInteger.TWO).add(BigInteger.ONE)).divide(BigInteger.valueOf(6));
    BigInteger cal2 = max.subtract(min).multiply(min).multiply(min.add(BigInteger.ONE)).divide(BigInteger.TWO);
 
    return cal1.add(cal2).mod(BigInteger.valueOf(1000000007)).intValue();
}
 