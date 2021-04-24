int powerOf1378(int n) {
    BigInteger a = (BigInteger.valueOf(1378))
                    .modPow(BigInteger.valueOf((long) n), BigInteger.TEN);
    return a.intValue();
}
