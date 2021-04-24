long cucumbersShopping(int v, int a, int n)
{
        if(v == 0) return 0;
        long cost = 0l;
        for(int i = 1; i <= v; i++)
        {
            cost += (long) i * a;
        }
 
        if(n < cost) return ((long) cost - n);
        return 0;
}
 