int findMinPalindrome(int n)
{
    BigInteger a = BigInteger.valueOf(n);
    while(true)
    {
        a = a.add(BigInteger.ONE);
        if(check(a.toString())) return a.intValue();
    }
    
    // return n;
}
 
boolean check(String str)
{
    return (new StringBuilder(str).reverse().toString()).equals(str);
}
 