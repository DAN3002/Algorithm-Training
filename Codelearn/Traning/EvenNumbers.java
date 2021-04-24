int evenNumbers(int n, int p)
{
    int pow = (int)Math.pow(2,n);
    if(pow > p) return -1;
    int x = p/pow;
    if(x%2 == 0) x--;
    return pow*x;
}
 