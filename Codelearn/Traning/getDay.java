int getDay(int a, String n)
{
    BigInteger cal = (new BigInteger(n)).divide(BigInteger.valueOf(a)).subtract(BigInteger.ONE);
    return cal.toString(2).length();
}
