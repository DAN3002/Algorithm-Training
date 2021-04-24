public class maxFractions {
    int[] maxFractions(int[] a)
    {
        int x = a[0], y = a[1], s = a[2];
        int gcd = calculateGCD(x, y);
        x /= gcd;
        y /= gcd;
        if(s < (x+y)) return new int[]{-x,-y};
        int m = 0,n = 0;
        for(int i = s/(Math.min(x,y)); i >= 1; i--)
        {
            if(x*i + y*i <= s)
            {
                m = x*i;
                n = y*i;
                break;
            }
        }
        if(m == 0 && n == 0) return new int[]{-x,-y};
        return new int[]{m,n};
    }
    int calculateGCD(int numerator, int denominator) {
        if (numerator % denominator == 0) {
            return denominator;
        }
        return calculateGCD(denominator, numerator % denominator);
    }
}
