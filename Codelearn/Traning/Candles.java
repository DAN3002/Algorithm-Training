int candles(int a, int b)
{
    return cal(a,b,a);
}
 
int cal(int a, int b, int c)
    {
        if(c < b) return a;
        else
        {
            a += c/b;
            c = c/b + c%b;
            return cal(a,b,c);
        }
    }