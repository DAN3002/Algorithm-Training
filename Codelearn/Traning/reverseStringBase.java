String reverseStringBase(String str)
{
    String lower = "qwertyuiopasdfghjklzxcvbnm";
    String out = "";
    for(int i = 0; i < str.length(); i++)
    {
        String c = str.charAt(i) + "";
        if(lower.indexOf(c) != -1) out += c.toUpperCase();
        else out += c.toLowerCase();
    }
    return out;
}
