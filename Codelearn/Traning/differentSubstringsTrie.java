import java.util.HashSet;
import java.util.Objects;

public class differentSubstringsTrie {
    String s;

    public static void main(String[] args) {
        System.out.println(differentSubstringsTrie("abac"));
    }

    private static int differentSubstringsTrie(String inputString)
    {
        HashSet<String> set = new HashSet<String>(){};
        for(int i = 0; i < inputString.length(); i++)
        {
            for(int j = i+1; j < inputString.length() + 1; j++)
            {
                set.add(inputString.substring(i,j));
            }
        }
        return set.size();
    }


}
