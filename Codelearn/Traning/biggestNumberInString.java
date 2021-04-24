String biggestNumberInString(String s)
{
    String numbers = "9876543210";
    int now = 0;
    int index = -1;
    char[] c = s.toCharArray();    
    for(int i = 0; i < numbers.length(); i++)
    {
        char number = numbers.charAt(i);
        while(s.charAt(now) == number)
        {
            now++;
            if(now >= s.length()) return s;
        } 
        index = s.lastIndexOf(number + "");
        if(index != -1 && index >= now)
        {            
            c[index] = c[now];
            c[now] = number;            
            break;
        }
    }
    return new String(c);
}
 