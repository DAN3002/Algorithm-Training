long beautifulNumberCt(long n) {
    String str = Long.toString(n, 3);
    int twoIndex = str.indexOf("2");
    if(twoIndex == -1) return n;
    
 
    char[] ch = str.toCharArray(); 
    Arrays.fill(ch, twoIndex, str.length(), '1');
 
    str = String.valueOf(ch);
 
    return Long.parseLong(str, 3);
}