String safeAreaProbability(int n) {
    if(n % 2 != 0 || n < 4) return "0";
    if(n == 4) return "1";
    int half = n/2;
 
    BigInteger a = BigInteger.valueOf(half - 1)
                    .multiply(BigInteger.valueOf(6));
 
    BigInteger b = BigInteger.valueOf(n - 3)
                    .multiply(BigInteger.valueOf(n-2))
                    .multiply(BigInteger.valueOf(n-1));
 
    BigInteger gcd = a.gcd(b);
 
    a = a.divide(gcd);
    b = b.divide(gcd);
 
    if(a.mod(b).compareTo(BigInteger.ZERO) == 0) return a.divide(b).toString();
 
    return a.toString() + "/" + b.toString();
}