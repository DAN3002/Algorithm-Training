int primePassword(String s)
{
    ArrayList<String> arr = new ArrayList<String>();
    Pattern p = Pattern.compile("-?\\d+");
    Matcher m = p.matcher(s);
    while (m.find()) {
        arr.add(m.group());
    }
    long max = -1;
    if(s.contains("5")) max = 5;
    else if(s.contains("2")) max = 2;
 
    // Get subString
    for(String str : arr)
    {
        long parse = Long.parseLong(str);
        if(isPrime(parse) && parse > max) max = parse;
 
        int length = str.length();
        for(int i = 0; i < length; i++)
        {
            char c = str.charAt(i);
            if("1379".contains(c + ""))
            {
                for(int j = 0; j < i; j++)
                {
                    long sub = Long.parseLong(str.substring(j, i+1));
                    if(sub > max && isPrime(sub))