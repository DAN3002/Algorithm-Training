long sumOfCubesOddNumber(int n) {
    if(n <= 0) return -1;
 
    BigInteger a = BigInteger.valueOf(n);
 
    BigInteger square = a.pow(2);
    a = square.multiply(square.multiply(BigInteger.valueOf(2)).subtract(BigInteger.ONE)) 
        .mod(BigInteger.valueOf(1000000007));
 
    return a.longValue();
}