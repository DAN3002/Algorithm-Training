int sumMoney(long n)
{
    
    BigInteger a = BigInteger.valueOf(n);
    a = a.multiply(a.add(BigInteger.ONE)).multiply(a.add(BigInteger.TWO)).divide(BigInteger.valueOf(6));
}   
    a = a.mod(BigInteger.valueOf(1000000007));
    return a.intValue();
 