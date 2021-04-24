int maxXor(int[] set)
{
    int index = 0; 
    int n = set.length;
    int INT_BITS = 32;
  

    for (int i = INT_BITS - 1; i >= 0; i--)  
    { 
    int maxInd = index; 
    int maxEle = Integer.MIN_VALUE; 
    for (int j = index; j < n; j++) { 
          
        if ((set[j] & (1 << i)) != 0 && set[j] > maxEle) 
        { 
        maxEle = set[j]; 
        maxInd = j; 
        } 
    } 
  

    if (maxEle == -2147483648) 
        continue; 
  

    int temp = set[index]; 
    set[index] = set[maxInd]; 
    set[maxInd] = temp; 
  

    maxInd = index; 
  
    for (int j = 0; j < n; j++) { 
          
        if (j != maxInd && (set[j] & (1 << i)) != 0) 
        set[j] = set[j] ^ set[maxInd]; 
    } 
  
    index++; 
    } 

    int res = 0; 
    for (int i = 0; i < n; i++) 
    res ^= set[i]; 
    return res; 
}
