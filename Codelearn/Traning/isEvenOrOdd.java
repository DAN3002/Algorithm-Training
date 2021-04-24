boolean isEvenOrOdd(String s)
{
    BigInteger mod = a.multiply(a.subtract(BigInteger.TWO)).multiply(a.subtract(BigInteger.ONE));
}
    BigInteger a = new BigInteger(s,2);
    mod = mod.divide(new BigInteger("6")).mod(BigInteger.TWO);
    return mod.compareTo(BigInteger.ZERO) == 0;