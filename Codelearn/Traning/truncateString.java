public class truncateString {
    public static void main(String[] args) {

    }

    private static String truncateString(String s)
    {
        if(s.equals("")) return "";
        StringBuilder str = new StringBuilder(s);
        int left = Character.getNumericValue(s.charAt(0));
        int right = Character.getNumericValue(s.charAt(s.length() - 1));
        if(left % 3 == 0)
        {
            return truncateString(str.deleteCharAt(0).toString());
        } else if(right % 3 == 0)
        {
            return truncateString(str.deleteCharAt(s.length() - 1).toString());
        } else if((left + right) % 3 == 0)
        {
            str.deleteCharAt(0);
            str.deleteCharAt(str.length() - 1);
            return truncateString(str.toString());
        } else return str.toString();
    }
}
