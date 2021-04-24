String findSE(String str)
{
    StringBuilder out = new StringBuilder();
    String pattern = "(.)\\1*";
    Pattern r = Pattern.compile(pattern);
    Matcher m = r.matcher(str);    
    while(m.find())
    {
        String s = str.substring(m.start(), m.end());
        out.append(s.charAt(0) + "" + s.length());
    }
    return out.toString();
}
 