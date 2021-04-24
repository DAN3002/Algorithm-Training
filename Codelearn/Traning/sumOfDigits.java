String sumOfDigits(String num) {
        BigInteger sum = BigInteger.ZERO;
        BigInteger mf = BigInteger.ONE; 
        for (int i = num.length() - 1; i >= 0; i --) 
        { 
            sum = sum.add(BigInteger.valueOf(num.charAt(i) - '0').multiply(mf).multiply(BigInteger.valueOf(i+1)));
            mf = mf.multiply(BigInteger.valueOf(10)).add(BigInteger.ONE); 
        } 
       
        return sum.toString();     
}
