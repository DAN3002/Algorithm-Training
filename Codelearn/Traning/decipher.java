String decipher(String cipher)
{
    String result = "";
    while(cipher.length() > 0) {
        String s = cipher.substring(0,2);
        int n = Integer.parseInt(s);
        if(n >= 97) {
            result+=(char)n;
            cipher = cipher.substring(2);
        }else {
            s = cipher.substring(0,3);
            n = Integer.parseInt(s);
            result += (char) n;
            cipher = cipher.substring(3);
        }
    }
    return result;
}
 