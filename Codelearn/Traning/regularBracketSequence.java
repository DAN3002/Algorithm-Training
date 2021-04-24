boolean regularBracketSequence(String sequence)
{
    int count = 0;
    for(int i = 0; i < sequence.length(); i++)
    {
        if(sequence.charAt(i) == '(') count++;
        else
        {
            if(count == 0) return false;
            count--;
        }
    }
    return (count == 0);
}
 