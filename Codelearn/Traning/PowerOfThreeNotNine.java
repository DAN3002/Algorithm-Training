int powerOfThreeNotNine(int m, int n)
{
    ArrayList<Integer> nine = new ArrayList<Integer>();
    for(int i = 0; i <= 10; i++)
    {
        int pow = (int) Math.pow(9,i);
        if(pow >= m)
        {
            if(pow <= n) nine.add(pow);
            else break;
        }
    }
    int count = 0;
    for(int i = 0; i <= 20; i++)
    {
        int pow = (int) Math.pow(3,i);
        if(pow >= m && pow <= n && !nine.contains(pow)) count++;
    }
    return count;
}
 