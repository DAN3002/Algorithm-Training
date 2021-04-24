String nextBinary(String s, long k)
{
    return (new BigInteger(s,2).add(BigInteger.valueOf(k))).toString(2);
}
