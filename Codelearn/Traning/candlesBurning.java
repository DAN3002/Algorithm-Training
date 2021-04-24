public class candlesBurning {
    public static void main(String[] args) {
        System.out.println(candlesBurning(10,1,2));
    }
    private static int candlesBurning(int x, int n, int p)
    {
//        if(p > n) return n*x - x;
//        if(p == n) return (n - 2)*x;
        int[] result = cal(n,p,n, 1);
        return result[1]*x - result[0]*x;
    }
    private static int[] cal(int a, int b, int c, int count)
    {
        if(c < b) return new int[]{count, a};
        else
        {
            a += c/b;
            c = c/b + c%b;
            count++;
            return cal(a,b,c,count);
        }
    }
}
