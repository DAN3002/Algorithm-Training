import java.math.BigInteger;

public class performCalculations {
    public static void main(String[] args) {
        String str = "1+2+3";
        System.out.println(performCalculations(str));
    }
    private static String performCalculations(String s)
    {
        BigInteger sum = new BigInteger("0");
        String[] split = s.split("\\+");
        for(String el : split)
        {
            sum = sum.add(new BigInteger(el));
        }
        return sum.toString();
    }

}
