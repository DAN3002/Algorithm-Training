boolean checkNumber(long n) {
    String str = n + "";
    for(int i = 1; i < str.length(); i++)
    {
        if(str.charAt(i) != str.charAt(0)) return false;
    }
    return true;    
}