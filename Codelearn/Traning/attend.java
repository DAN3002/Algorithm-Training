int attend(String[] s)
{
    int count = 0;
    int max = s.length;
    int student = s[0].length();
    for(int i = 0; i< student; i ++)
    {
        int sum = 0;
        for(int j = 0; j < max; j++)
        {
            if(s[j].charAt(i) == '1') sum++;
            if(sum >= (int) max *0.4)
            {
                count++;
                break;
            }
        }
    }
    return count;
}
 