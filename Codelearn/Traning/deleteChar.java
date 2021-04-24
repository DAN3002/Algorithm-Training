String deleteChar(String s, int k) {
    StringBuilder res = new StringBuilder();

    int start = 0;
    while(k > 0)
    {
        if(s.length() - start <= k) 
        {
            start = s.length();
            break;
        }
        int maxIndex = start;
        for(int i = start; i <= start + k; i++)
        {
            char c = s.charAt(i);
            if(c == '9')
            {
                maxIndex = i;
                break;
            } else if(c > s.charAt(maxIndex)) maxIndex = i;         
        }

        res.append(s.charAt(maxIndex));

        k -= maxIndex - start;
        start = maxIndex + 1;           
    }
    return res.toString() + s.substring(start);
}
