String convertNumber(long n) {
    String str = "ABCDEFGHIK";
    String s = n + "";
    String out = "";
    for(int i = 0; i < s.length(); i++)
    {
        out += str.charAt(Integer.parseInt(s.charAt(i) + ""));
    }
    return out;
}