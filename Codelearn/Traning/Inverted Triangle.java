String verticesValue(long[] edge) {
    BigInteger[] b = new BigInteger[edge.length];
    for (int i = 0; i < b.length; i++) {
        b[i] = BigInteger.valueOf(edge[i]);
    }
    
    for (int i = b.length - 1; i > 0; i--)
        for (int j = 0; j < i; j++)
            b[j] = b[j + 1].subtract(b[j]);

    if(b[0].signum() > 0) {
        return b[0]
                .mod(BigInteger.valueOf(1000000007))
                .toString();
    }

    return "-" + b[0]
            .abs()
            .mod(BigInteger.valueOf(1000000007))
            .toString();
}
