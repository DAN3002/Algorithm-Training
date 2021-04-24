int changeHorses(int[] a, int k, int s)
{
        if(k > s) return 0;
        int max = k;
        int count = 0;
        for(int i = 0; i < a.length; i++)
        {
            int poistion = a[i];
            if(poistion > max)
            {
                if(poistion - max > k || i == 0) return -1;
                max = a[i-1] + k;
                count ++;
            } else if(poistion == max)
            {
                max += k;
                count++;
            }
            if(max >= s) return count;
        }
        int last = a[a.length - 1];
        if(max >  last && last + k >= s) return count+1;
        if(max < s) return -1;
        return count;
}
 