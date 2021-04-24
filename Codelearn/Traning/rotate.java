int[] rotate(int[] arr, int k)
{
    int n = arr.length;
    k %= n;
    reverseArray(arr, 0, n - 1); 
    reverseArray(arr, 0, k - 1); 
    reverseArray(arr, k, n - 1); 
    return arr;
}
 
void reverseArray(int arr[], int start, int end) 
{ 
    while (start < end) 
    { 
        int temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp; 
        start++; 
        end--; 
    } 
}
 