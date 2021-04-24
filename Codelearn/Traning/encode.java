String encode(String s)
{
    StringBuilder str = new StringBuilder();
    String[] split = s.split("-");
    for(String bin : split)
    {
        str.append((char) Integer.parseInt(bin, 2));
    }
    return str.toString();
}
 