public class ten{
    public static void main(String[] args) {
        System.out.println(ten(15));
    }

    private static int ten(int n)
    {
        if(n % 10 == 0) return 0;
        String toString = n + "";
        int lastDigit = Integer.parseInt(toString.charAt(toString.length() - 1) + "");

        if(10 % lastDigit == 0) return 10 / lastDigit;
        return -1;
    }
}