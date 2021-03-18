long multipleOfThreeAndFive(long n) {
    String res = sumDivOfAandB(n ,3, 5);
    if(res.length() > 10) res = res.substring(res.length() - 10, res.length());
    return Long.parseLong(res);
}
 
public String sumDivOfAandB(long n, long a, long b)
{
    if(b % a == 0) return sumDivOfA(a,n).toString();
    long gcd = GCD(a,b);
    long cal = a * (b/gcd);
    return sumDivOfA(a,n)
            .add(sumDivOfA(b,n))
            .subtract(sumDivOfA(cal, n))
            .toString();
}
 
public long GCD(long a, long b) {
    if (b==0) return a;
    return GCD(b,a%b);
}
 
public BigInteger sumDivOfA(long a, long n)
{
    BigInteger b = BigInteger.valueOf(a);
    BigInteger c = BigInteger.valueOf(n);
    BigInteger div = c.divide(b);
    return div.multiply(div.add(BigInteger.ONE)).divide(BigInteger.valueOf(2)).multiply(b);