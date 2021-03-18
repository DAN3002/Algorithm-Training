long countArithmeticProgression(int n, int m) {
    return sumDiv(m-1, n-1) - sumDiv(m-1, m-1) + 1;
}

long sumDiv(long n,long m)
{
    BigInteger div = BigInteger.valueOf(m/n);
    BigInteger a = div.multiply(div.subtract(BigInteger.ONE)).divide(BigInteger.valueOf(2)).multiply(BigInteger.valueOf(n));
    BigInteger b = div.multiply(BigInteger.valueOf(m+1).subtract(BigInteger.valueOf(n).multiply(div)));
    return a.add(b).longValue();
}
