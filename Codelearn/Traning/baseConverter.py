String baseConverter(int base1, int base2, String numberStr) {
    String str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    BigInteger base = BigInteger.valueOf(base2);
    BigInteger sBase = BigInteger.valueOf(base1);

    BigInteger a = BigInteger.ZERO;
    BigInteger pow = BigInteger.ONE;

    for(int i = numberStr.length() - 1; i >= 0; i--)
    {
        int time = str.indexOf(numberStr.charAt(i));
        a = a.add(
            BigInteger
            .valueOf(time)
            .multiply(pow)
        );
        pow = pow.multiply(sBase);
    }
    
    String out = "";
    while(!a.equals(BigInteger.ZERO))
    {
        int mod = a.mod(base).intValue();
        out = str.charAt(mod) + out;
        a = a.divide(base);
    }
    return out.equals("") ? "0" : out;
}
