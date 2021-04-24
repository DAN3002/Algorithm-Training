public class digitsProduct {
    public static void main(String[] args) {
        System.out.println(digitsProduct(12));
    }
    private static int digitsProduct(int product)
    {
        if(product == 0) return 10;
        StringBuilder str = new StringBuilder();
        for(int i = 9; i >= 2 && product > 1; i--)
        {
            while(product % i == 0)
            {
                product /= i;
                str.insert(0, String.valueOf(i));
                System.out.println(i);
            }
        }
        if(product == 1) return Integer.parseInt(str.toString());
        return -1;

    }
}
