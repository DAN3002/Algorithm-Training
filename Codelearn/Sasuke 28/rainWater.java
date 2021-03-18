int[] rainWater(int[] arr)
{
    int n = arr.length;
    ArrayList<Integer> out = new ArrayList<Integer>();
    int left[] = new int[n]; 

    int right[] = new int[n]; 

    int water = 0; 

    left[0] = arr[0]; 
    for (int i = 1; i < n; i++) 
        left[i] = Math.max(left[i - 1], arr[i]); 

    right[n - 1] = arr[n - 1]; 
    for (int i = n - 2; i >= 0; i--) 
        right[i] = Math.max(right[i + 1], arr[i]); 

    for (int i = 0; i < n; i++) 
    {
        int min = arr[i] + Math.min(left[i], right[i]) - arr[i];
        if(min != 0) out.add(min);
    }
    int[] a = new int[out.size()];
    for(int i = 0; i < out.size(); i++) a[i] = out.get(i);

    return a; 
}

