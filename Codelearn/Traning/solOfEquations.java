long long solOfEquations(int k, int a, int b, int c)
{
    k = k - a - b - c;
    if(k < 0)
        return 0;
    long long tich = 1;
    
   for(int i = k ; i >= k - 1; --i)
   {
       tich *= i;
   }
    
    tich =tich / 2 + k * 2 + 1;
    return tich;
 
}