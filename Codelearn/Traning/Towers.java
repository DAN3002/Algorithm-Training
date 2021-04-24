int[] towers(int[] arr)
{
    int count = 0;
    int max = -1;
    while(arr.length != 0)
    {
        int lastLength = arr.length;
        arr = removeElements(arr, arr[0]);
        int number = lastLength - arr.length;
        if(number > max) max = number;
        count++;
    }
    return new int[]{max,count};
}
int[] removeElements(int[] arr, int key) 
{ 
    return Arrays.stream(arr) 
        .filter(val -> val != key) 
        .toArray(); 
}
 