boolean isMathError(int a, int b) {    
    if(a == 0 && b == 0) return true;
    BigInteger max = BigInteger.valueOf(10).pow(100);
 
    BigInteger cal = BigInteger.valueOf(a).pow(b);
 
    return cal.compareTo(max) >= 0;
}