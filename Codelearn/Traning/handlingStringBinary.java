String handlingStringBinary(String str)
{
    return (new BigInteger(str,2)).toString(4);
}
 