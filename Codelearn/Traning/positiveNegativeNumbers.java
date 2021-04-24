long positiveNegativeNumbers(long product)
{
    if(product == 0) return 10;
    if(product <= 9) return product;
    StringBuilder str = new StringBuilder();
    for(int i = 9; i >= 2 && product > 1; i--)
    {
        while(product % i == 0)
        {
            product /= i;
            str.insert(0, String.valueOf(i));
        }        
    }
    if(product == 1) return Long.parseLong(str.toString());
    return -1;
}
 