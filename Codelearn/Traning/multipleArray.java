int multipleArray(long x, long y)
{
        if(x == y) return 1;
        int count = 0;
        if(x == 0)
        {
            if(y == 1) return 0;
            if(y == 2) return 1;
            x = 1;
        }
        while (x <= y)
        {
            System.out.println(x);
            x *= 2;
            count++;
        }
        return count;
}
 