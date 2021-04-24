String changeCharacter(String s)
{
    boolean check = false;
    StringBuilder out = new StringBuilder();
    for(int i = 0; i < s.length(); i++)
    {
        String c = s.charAt(i) + "";
        if(c.equals("(") || c.equals(")")) check = check ? false : true;
        else if (check){
            if(Character.isLowerCase(s.charAt(i))) out.append(c.toUpperCase());
            else out.append(c.toLowerCase());
        } else out.append(c);        
    }
    return out.toString();
}