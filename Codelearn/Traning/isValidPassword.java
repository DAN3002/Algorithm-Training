import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class isValidPassword {
    public static void main(String[] args) {

        System.out.println(isValidPassword("aBa!1b2"));
    }


    public static boolean isValidPassword(String pass)
    {
        if(pass.length() > 12 || pass.length() < 6) return false;

        int lowCount = 0;
        int supCount = 0;
        int numCount = 0;
        int diCount = 0;

        int[] lowIndex = new int[4];
        int[] supIndex = new int[4];
        int[] numIndex = new int[4];

        for(int i = 0; i < pass.length(); i++)
        {
            String str = pass.charAt(i) + "";
            if(str.matches("[a-z]"))
            {
                if(lowCount == 3) return false;
                else
                {
                    lowIndex[lowCount] = i;
                    lowCount++;
                }
            } else if(str.matches("[A-Z]"))
            {
                if(supCount == 3) return false;
                else
                {
                    supIndex[supCount] = i;
                    supCount++;
                }
            } else if(str.matches("[0-9]"))
            {
                if(numCount == 3) return false;
                else
                {
                    numIndex[numCount] = i;
                    numCount++;
                }
            } else if(str.matches("[!@#$%^&*()]"))
            {
                if(diCount == 1) return false;
                else diCount = 1;
            }
        }

        if(numCount == 0 || lowCount == 0 || supCount == 0 || diCount == 0) return false;

        if(!check(lowIndex)) return false;
        if(!check(supIndex)) return false;
        if(!check(numIndex)) return false;

        return true;
    }

    public static boolean check(int[] indexs)
    {
        if(indexs[0] == indexs[1] - 1 && indexs[1] == indexs[2] - 1) return false;
        else if(indexs[1] == indexs[2] - 1 && indexs[2] == indexs[3] - 1) return false;

        return true;
    }
}


//        if(!check("[a-z]", pass)) return false;
//                if(!check("[A-Z]", pass)) return false;
//                if(!check("[0-9]", pass)) return false;
//
//
//                int count = 0;
//                Pattern pattern = Pattern.compile("[!@#$%^&*()]");
//                Matcher matcher = pattern.matcher(pass);
//                while (matcher.find()) {
//                if(count == 1) return false;
//                else count = 1;
//                }
//                if(count == 0) return false;
//int length = 0;
//    int[] indexs = new int[12];
//    Pattern pattern = Pattern.compile(regex);
//    Matcher matcher = pattern.matcher(pass);
//        while(matcher.find())
//                {
//                indexs[length] = matcher.start();
//                length++;
//                }
//
//                if(length > 3 || length == 0) return false;
//
//                if(indexs[0] == indexs[1] - 1 && indexs[1] == indexs[2] - 1) return false;
//                else if(indexs[1] == indexs[2] - 1 && indexs[2] == indexs[3] - 1) return false;
//
//                return true;