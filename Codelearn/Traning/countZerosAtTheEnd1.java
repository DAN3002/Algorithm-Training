public class countZerosAtTheEnd1 {
    public static void main(String[] args) {
        long sum = 1;
        for(int i = 133; i >= 2; i -= 2)
        {
            System.out.println(i + "_" + sum);
            sum *= i;
        }
        System.out.println(sum);
    }
}
