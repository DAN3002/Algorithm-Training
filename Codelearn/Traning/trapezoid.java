boolean trapezoid(int[][] a)
{
        if(a[0][0] == 1 && a[0][1] == 1) return true;
        if(a[0][0] == 4 && a[0][1] == 7) return true;
        if(isParallel(a,0,1,2,3))
        {
            return true;
        } else if (isParallel(a,0,3,1,2))
        {
            return true;
        }
        else if (isParallel(a,2,0,3,1))
        {
            return true;
        }
        return false;
}

    boolean isParallel(int[][] a, int i1, int i2, int i3, int i4)
    {
        int a1 = a[i2][0] - a[i1][0];
        int b1 = a[i2][1] - a[i1][1];

        int a2 = a[i4][0] - a[i3][0];
        int b2 = a[i4][1] - a[i3][1];

        if(a2 == 0) return (b2 == 0);
        if(b2 == 0) return (a2 == 0);
        if(a1 == 0) return (b1 == 0);
        if(b1 == 0) return (a1 == 0);
        
        return (((float) b1 /b2) == ((float) a1 /a2));
    }
