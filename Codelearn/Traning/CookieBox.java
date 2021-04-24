int[] cookieBox(int s)
{
    int m = 0, n = 0;    
    int min = s + 1;
 
    for(int i = 1; i <= Math.sqrt(s); i++)
    {
        int j = s % i == 0 ? s/i : s/i+1;
        int sum = i + j;
        if(sum < min)
        {
            min = sum;
            m = i; n = j;       
        } else if(sum == min && m*n > i*j)        
        {
            m = i; n = j; 
        }
    }
    return new int[]{m,n};
}
 