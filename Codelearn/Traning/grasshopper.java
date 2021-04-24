public class grasshopper {
    public static void main(String[] args) {
        System.out.println(grasshopper(80,2));
    }

    public static String grasshopper(long a,long b) {
        if(b == 1) return "1";
        long max = a/b;
        long count = 0;
        long permute = 1;
        for(long i = 0; i <= max; i++)
        {
            long totalJump = (a - i*b) + i;
            long sum = 1;

            for(long j = i - 1; j >= 0; j--)
            {
                sum *= (totalJump - j);
            }
            count += sum / permute;
            permute *= (i + 1);
            System.out.println(permute);
        }
        return count + "";
    }
}