public static BigInteger sqrt(BigInteger val) {
    BigInteger half = BigInteger.ZERO.setBit(val.bitLength() / 2);
    BigInteger cur = half;

    while (true) {
        BigInteger tmp = half.add(val.divide(half)).shiftRight(1);

        if (tmp.equals(half) || tmp.equals(cur))
            return tmp;

        cur = half;
        half = tmp;
    }
}

String findSqroot(String n) {
    return sqrt((new BigInteger(n))).toString();
}
