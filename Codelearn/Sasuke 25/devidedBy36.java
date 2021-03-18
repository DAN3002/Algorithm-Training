boolean devidedBy36(String num)
{
    return (new BigInteger(num)).mod(BigInteger.valueOf(36)).equals(BigInteger.ZERO);
}
 