int kaprekarConst(int n)
{
    int minus = getMinus(n + "");
    if(minus == 0) return 0;
    int count = 0;
    while(minus != 6174)
    {
        count++;
        if(minus < 1000) return 0;
        minus = getMinus(minus + "");        
    }
    return count + 1;
    
}

int getMinus(String str)
{        
    int[] arr = new int[4];
    for(int i = 0; i < 4; i++) arr[i] = Character.getNumericValue(str.charAt(i));
    Arrays.sort(arr);
    int max = 0, min = 0;
    for(int i = 0; i < 4; i++)
    {
        max += arr[i] * Math.pow(10, 3 - i);
        min += arr[i] * Math.pow(10, i);
    }    
    return Math.abs(max - min);
}