boolean isSquareFreeInteger(int n)
{
    if (n % 2 == 0)  n = n / 2; 
    
    if (n % 2 == 0) return false; 
    
    for (int i = 3; i <= Math.sqrt(n); i = i + 2) 
    { 
        if (n % i == 0) 
        { 
            n = n / i; 
            if (n % i == 0) return false; 
        } 
    } 
    return true; 
}
 