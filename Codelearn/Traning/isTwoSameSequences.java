public class isTwoSameSequences {
    public static void main(String[] args) {
        int[] arr = {1,2,3};
        System.out.println(isTwoSameSequences(arr));
    }

    public static boolean isTwoSameSequences(int[] arr)
    {
        int left = 0;
        int right = 0;
        for(int i : arr) left += i;
        for(int i = 0; i <= arr.length - 2; i++)
        {
            right += arr[i];
            left -= arr[i];
            if(right == left)
            {
                return true;
            }
        }
        return false;
    }

}
