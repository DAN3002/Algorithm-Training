int sequenceFixing(String sequence)
{
    int count = 0;
    int plus = 0;
    for(int i = 0; i < sequence.length(); i++)
    {
        if(sequence.charAt(i) == '(') count++;
        else
        {
            if(count == 0) plus++;
            else count--;            
        }
    }
    return Math.abs(count) + plus;
}
 