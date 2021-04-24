long calculateBasicModulo(long a, long b, long p) {
    return BigInteger.valueOf(a).modPow(BigInteger.valueOf(b), BigInteger.valueOf(p)).longValue();
}