public class promotion {
    public static void main(String[] args) {
        System.out.println(promotion(3,5,1));
    }


    private static int promotion(int x, int y, int s)
    {
        if(s <= x+y)
        {
            if(s <= x) return s;
            return x;
        }
        if(y == 0) return s;
        return (s/(x+y))*x + (s%(x+y));
    }
}
