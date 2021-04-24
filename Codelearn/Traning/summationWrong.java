long summationWrong(long a, long b)
{
    String sa = String.valueOf(a);
    String sb = String.valueOf(b);
    int max = Math.max(sa.length(), sb.length());
    sa = pad(sa, max);
    sb = pad(sb, max);
 
    String out = "";
 
    for(int i = 0; i < max; i++)
    {
        out += (Integer.parseInt(sa.charAt(i) + "") + Integer.parseInt(sb.charAt(i) + "")) % 10;
    }
 
    return Long.parseLong(out);
}
 
String pad(String inputString, int length)
{
    return String.format("%1$" + length + "s", inputString).replace(' ', '0');
}