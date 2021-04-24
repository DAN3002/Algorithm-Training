public class checkEqualFrequency {
    public static void main(String[] args) {
        int[] arr = {1,2,2,1};
        System.out.println(checkEqualFrequency(arr));

    }
    private static boolean checkEqualFrequency(int[] inputArray)
    {
        int lastCount = -1;
        for(int i = 0; i < inputArray.length; i++)
        {
            int a = inputArray[i];
            if(a != 0)
            {
                int count = 1;
                for(int j = i + 1; j < inputArray.length; j++)
                {
                    if(a == inputArray[j])
                    {
                        count++;
                        inputArray[j] = 0;
                    }
                }
                if(lastCount == -1)
                {
                    lastCount = count;
                }
                else if(lastCount != count)
                {
                    return false;
                }
            }
        }
        return true;
    }

}
