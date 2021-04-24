    int compareSumOfDigits(String input)
    {
        int minus = 0;
        for(int i = 0; i < input.length(); i++)
        {
            int j = Integer.parseInt(input.charAt(i) + "");
            if(j % 2 == 0) minus -= j;
            else minus += j;            
        }
        return minus;
    }
 