int maxLenSubStr(String str)
{
        int max = 0;
        for(int i = 0; i < str.length() - 1; i++)
        {
            char c = str.charAt(i);
            int length = str.lastIndexOf(c + "") + 1 - i;
            if(length > max)
            {
                max = length;
            }
        }
        return max;
}
 