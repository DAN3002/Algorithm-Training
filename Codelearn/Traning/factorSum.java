public class factorSum {
    private static int[] arr = {2,3,5,7,11,13,17,19,23};

    public static void main(String[] args) {
        System.out.println(factorSum(200));
    }

    private static int factorSum(int n)
    {
        int sum = 0;
        int last = n;
        for(int i = 0; i < arr.length; i++)
        {
            int prime = arr[i];
            if(prime == last) return last;
            while(n % prime == 0)
            {
                n /= prime;
                sum += prime;
            }
            if(n == 1) break;
        }
        return factorSum(sum);
    }
}
