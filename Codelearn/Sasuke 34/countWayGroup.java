int countWayGroup(long n) {
    if(n < 6) return 0;
    BigInteger a = BigInteger.valueOf(n);
    a = a
    .multiply(
        a.pow(2)
        .subtract(a.multiply(BigInteger.valueOf(9)))
        .add(BigInteger.valueOf(20))
    )
    .divide(BigInteger.valueOf(6))
    .mod(BigInteger.valueOf(1000000007));
 
    return a.intValue();
}