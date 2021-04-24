long bitOneCount(int a, int b)
{
    long count = 0;
    for(int i = a; i <= b; i++)
    {
        count += Integer.bitCount(i);
    }
    return count;
}
 