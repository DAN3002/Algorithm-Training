public class cookieBox {
    public static void main(String[] args) {
        int[] result = cookieBox((int)Math.pow(10,9));
        System.out.println(result[0] + " - " + result[1]);
    }
    private static int[] cookieBox(int s)
    {
        if(s == 0 ||s == 1) return new int[]{1,1};
        int m = 0, n = 0;
        int min = s + 1;

        for(int i = 1; i < Math.sqrt(s); i++)
        {
            int j = s % i == 0 ? s/i : s/i+1;
            int sum = i + j;
            if(sum < min)
            {
                min = sum;
                m = i; n = j;
            } else if(sum == min)
            {
                if(m*n > i*j)
                {
                    m = i; n = j;
                } else if(m*n > i*j && m > i)
                {
                    m = i; n = j;
                }
            }
        }
        return new int[]{m,n};
    }
}
