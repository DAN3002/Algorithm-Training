char charactersInString(long n)
{
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(n > 26) n = (long) n%26;
        if(n == 0) return 'Z';
        return str.charAt((int)n-1);
}
 