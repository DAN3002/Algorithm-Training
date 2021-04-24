String removeDuplicateCharacters(String str)
{
    StringBuilder out = new StringBuilder();
    for(int i = 0; i < str.length(); i++)
    {
        char c = str.charAt(i);
        if(str.lastIndexOf(c + "") == str.indexOf(c + "")) out.append(c);
    }
    return out.toString();
}
 