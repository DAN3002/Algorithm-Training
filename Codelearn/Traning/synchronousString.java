String synchronousString(String s)
{
    String max = "";
    int start = 0;
    while(start + max.length() < s.length())
    {
        int i = 0;
        char c = s.charAt(start);
        while(start + i < s.length() && s.charAt(start + i) == c) i++;
        start += i;
        if(i > max.length()) max = repeat(c,i);
    }
    return max;
}

String repeat(char c, int size)
{
    String str = "";
    for(int i = 0; i < size; i++) str += c;
    return str;
}
