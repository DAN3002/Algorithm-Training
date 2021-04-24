boolean findRange(int[] arr, int sum)
{
    int n = arr.length;
    int curr_sum, i, j; 
 
    for (i = 0; i < n; i++)  
    { 
        curr_sum = arr[i]; 
        for (j = i + 1; j <= n; j++)  
        { 
            if (curr_sum == sum)  
            { 
                int p = j - 1; 
                return true; 
            } 
            if (curr_sum > sum || j == n) 
                break; 
            curr_sum = curr_sum + arr[j]; 
        } 
    } 
 
    return false; 
}
 