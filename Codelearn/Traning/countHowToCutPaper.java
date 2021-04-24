public class countHowToCutPaper {
    int countHowToCutPaper(long a, long b)
    {
        int count = 0;
        long sum = a*b;
        for(int i = 1; i <= Math.sqrt(sum); i++)
        {
            if(sum % i == 0)
            {
                count += 2;
            }

        }
        return (int) Math.sqrt(sum) == Math.sqrt(sum) ? count - 1 : count;
    }
}
