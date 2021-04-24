public class convertString {
    public static void main(String[] args) {
        System.out.println(convertString("AbbBcD", "ABBD"));
    }
    private static String convertString(String a, String b)
    {
        if(a.length() < b.length()) return "NO";
        String UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
        StringBuilder str = new StringBuilder(a);
        int lastindex = 0;
        for(int i = 0; i < b.length(); i++)
        {
            char c = b.charAt(i);
            int index = str.indexOf((c + ""), lastindex);
            if(index == -1){
                index = str.indexOf((c + "").toLowerCase(), lastindex);
                if(index == -1) return "NO";
            }
            System.out.println(index);
            for(int j = lastindex + 1; j < index; j++)
            {
                if(UPPER.contains(str.charAt(j) + "")){
                    System.out.println("Stop: " + j);
                    return "NO";
                }
            }

            str.deleteCharAt(index);
            lastindex = index == 0 ? 0 : index - 1;
        }
        for(int i = 0; i < str.length(); i++)
        {
            if(UPPER.contains(str.charAt(i) + "")){
                return "NO";
            }
        }
        return "YES";
    }

}
