String messageFromBinaryCode(String code)
{
    String out = "";
 
    for(int i = 1; i <= code.length()/8; i++)
    {
        String bin = code.substring((i-1)*8, i*8);
        out += (char) Integer.parseInt(bin,2);
    }
 
    return out;
}
 