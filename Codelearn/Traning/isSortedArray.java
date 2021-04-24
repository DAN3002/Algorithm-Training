boolean isSortedArray(int[] arr)
{
        if(arr.length > 2)
        {
            for(int i = 1; i < arr.length - 1; i++)
            {
                if(arr[i] > arr[i+1]) return false;
            }
        }
        return true;
}
 