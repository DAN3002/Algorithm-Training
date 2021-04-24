int[] sortArray(int[] arr)
{
    int[] out = new int[arr.length];
    ArrayList<Integer> a = new ArrayList<Integer>();
    ArrayList<Integer> b = new ArrayList<Integer>();

    for(int i : arr)
    {
        if(i < 0) a.add(i);
        else if(i > 0) b.add(i);
    }

    Collections.sort(a, Collections.reverseOrder());
    Collections.sort(b);

    for(int i = 0; i < arr.length; i++)
    {
        int el = arr[i];
        if(el == 0) out[i] = 0;
        else if(el > 0)
        {
            out[i] = b.get(0);
            b.remove(0);
        } else {
            out[i] = a.get(0);
            a.remove(0);          
        }
    }

    return out;
}
