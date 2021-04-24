int ten(int n)
{
        if(n % 10 == 0) return 0;
        String toString = n + "";
        int lastDigit = Integer.parseInt(toString.charAt(toString.length() - 1) + "");
 
        if(10 % lastDigit == 0) return (10 / lastDigit - 1);
        return -1;
}
 