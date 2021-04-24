public class synchronousString {
    public static void main(String[] args) {
        System.out.println(synchronousString("1111444444"));
    }
    private static String synchronousString(String s)
    {
        char c = s.charAt(0);
        char max = c;
        int length = 1;
        int count = 1;
        for(int i = 1; i < s.length(); i++)
        {
            char el = s.charAt(i);
            if(c == el)
            {
                count++;
            }
            else
            {
                if(count > length)
                {
                    length = count;
                    max = c;
                }
                c = el;
                count = 1;
            }
        }
        String out = "";
        for(int i = 1; i <= length; i++)  out += max;
        return out;
    }

}
