int countHowToCutPaper(long a, long b)
{
    int count = 0;
    long sum = a*b;
    double haft =  Math.sqrt(sum);
    for(int i = 1; i <= haft; i++)
    {
        if(sum % i == 0) 
        {
            count += 2;
        }
 
    }        
    return (int) haft == haft ? count - 1 : count;    
}
 