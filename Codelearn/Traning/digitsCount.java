int digitsCount(int l, int r)
{
        int[] arr = new int[10];
        for(int i = l; i <= r; i++)
        {
            String str = i + "";
            for(int j = 0; j < str.length(); j++) arr[Integer.parseInt(str.charAt(j) + "")]++;
        }
 
        int max = 0;
        for(int i = 0; i < 10; i++)
        {
            if(arr[i] > arr[max]) max = i;
        }
        return max;
}
 