public class bishopDiagonal {
    public static void main(String[] args) {
        String[] result = bishopDiagonal("a1", "h8");
        System.out.println(result[0] + " - " + result[1]);
    }
    private static String[] bishopDiagonal(String bishop1, String bishop2)
    {
        String code = "abcdefgh";
        int x = 0, y = 0;
        int x1 = code.indexOf(bishop1.charAt(0) + ""), x2 = code.indexOf(bishop2.charAt(0) + "");
        int y1 = bishop1.charAt(1) - '1', y2 = bishop2.charAt(1) - '1';

        if(x1 + y1 != x2 + y2 && x1 - y1 != x2 - y2)
        {
            if(bishop1.compareTo(bishop2) < 0) return new String[]{bishop1, bishop2};
            else return new String[]{bishop2, bishop1};
        }
        for(int i = 0; i < 8; i++)
        {
            if(7 + i == x1 + y1 || 7 + i == x1 - y1)
            {
                x = i; y = 7;
                break;
            } else if(i == x1 + y1 || i == x1 - y1)
            {
                x = i; y = 0;
                break;
            }
        }
        if(x == 0 && y == 0) return new String[]{"a1", "h8"};
        if(x == 7 && y == 7) return new String[]{"a8", "h1"};
        if(x > y)
        {
            return new String[]{code.charAt(y) + "" + (x + 1), code.charAt(x) + "" + (y + 1)};
        } else
        {
            return new String[]{code.charAt(x) + "" + (y + 1), code.charAt(y) + "" + (x + 1)};
        }
    }
}
