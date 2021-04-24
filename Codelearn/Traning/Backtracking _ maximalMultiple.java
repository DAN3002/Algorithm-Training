int max = Integer.MIN_VALUE;
int maximalMultiple(int[] arr) {
     solve(arr, 0, 0, 0, 0, 0);
     return max;
}


void solve(int[] arr,int index, int use,int notUse, int c1, int c2)
{
    if(index == arr.length)    
    {        
        if(c1 != 0 && c2 != 0)
        {
            // System.out.println(c1 + "-" + c2 + "-" + use*notUse);
            max = Math.max(max, use*notUse);
        }
    } else {                
        solve(arr, index + 1, use + arr[index], notUse, c1 + 1, c2);
        solve(arr, index + 1, use, notUse + arr[index], c1, c2 + 1);
    }
}
