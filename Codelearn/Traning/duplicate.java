boolean duplicate(int[] arr)
{
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i = 0; i < arr.length; i++)
        {
            set.add(arr[i]);
            if(set.size() != i + 1) return true;
        }
        return false;
}
 