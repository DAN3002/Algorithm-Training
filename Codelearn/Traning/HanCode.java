import jdk.swing.interop.SwingInterOpUtils;

import java.util.Arrays;

public class HanCode {
    public static void main(String[] args) {
        System.out.println(hanCode("AWGrOwUcFWnghtAyvxSb"));
    }

    private static String hanCode(String s)
    {
        boolean[] primeMap = initPrimeMap();
        String out = "";
        for(int i = 0; i < s.length(); i++)
        {
            int ascii = (int) s.charAt(i);
            int j = 0;
            while(true)
            {
                if(primeMap[ascii - j])
                {
                    out += (char) (ascii - j);
                    break;
                } else if(ascii + j <= 123 && primeMap[ascii + j])
                {
                    out += (char) (ascii + j);
                    break;
                } else j++;
            }
        }
        return out;
    }

    private static boolean[] initPrimeMap()
    {

        boolean[] map = new boolean[124];
        Arrays.fill(map, true);
        map[0] = false;
        map[1] = false;
        for(int i = 2; i <= 123; i++)
        {
            if(map[i])
            {
                for(int j = 2*i; j <= 123; j += i) map[j] = false;
            }
        }
        return map;
    }

}
