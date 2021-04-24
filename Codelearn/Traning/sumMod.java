int sumMod(long n, long m)
{
        BigInteger a = BigInteger.valueOf(n);
        BigInteger b = BigInteger.valueOf(m);
        BigInteger mod = b.mod(a);
        BigInteger out = a.multiply(a.subtract(BigInteger.ONE)).divide(BigInteger.TWO).multiply(b.divide(a));
        out = out.add(mod.multiply(mod.add(BigInteger.ONE)).divide(BigInteger.TWO));
        out = out.mod(BigInteger.valueOf(1000000007));
        return out.intValue();
}
