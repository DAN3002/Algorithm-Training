int mejai(char[] kDA, int magic)
{
    int count = 0;
    for(char c : kDA)
    {
        switch(c)
        {
            case 'K': {
                count = count >= 21 ? 25 : count + 4;
                break;
            }
            case 'D': {
                count = count <= 10 ? 0 : count - 10;
                break;
            }
            case 'A': {
                count = count >= 23 ? 25 : count + 2;
                break;
            }
        }
    }
    return magic + count*5;
}
 