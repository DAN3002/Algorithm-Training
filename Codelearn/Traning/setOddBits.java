int setOddBits(int n)
{
        int count = 0; 
        int res = 0; 
        for (int temp = n; temp > 0; temp >>= 1)  
        { 
            if (count % 2 == 0) 
                res |= (1 << count); 
  
            count++; 
        } 
  
        return (n | res); 
}
