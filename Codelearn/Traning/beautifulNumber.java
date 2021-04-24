long beautifulNumber(long n) {
    if(n == 1) return 3;
 
    String str = Long.toString(n, 3);
    int twoIndex = str.indexOf("2");
    if(twoIndex == -1) return n;
    
    int zeroIndex = str.lastIndexOf("0", twoIndex);
    if(zeroIndex == -1) return (long) Math.pow(3, str.length());
 
    char[] ch = str.toCharArray(); 
    Arrays.fill(ch, zeroIndex, str.length(), '0');
    ch[zeroIndex] = '1';
 
    str = String.valueOf(ch);
 
    return Long.parseLong(str, 3);
}