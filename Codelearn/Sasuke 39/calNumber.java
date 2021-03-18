int calNumber(int k) {
    BigInteger a = BigInteger.valueOf(k);
    a = a.modPow(BigInteger.valueOf(2), BigInteger.valueOf(1000000007));
    return a.intValue();
}