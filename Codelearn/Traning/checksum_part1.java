package codelearn;

public class checksum_part1 {
    int checksum_part1(long barcode)
    {
        String str = String.valueOf(barcode);
        int sum = 0;
        
        for(int i = 0; i < str.length(); i++)
        {
            int j = Integer.parseInt(String.valueOf(str.charAt(i)));
            if(i % 2 == 0) sum +=  j * 3;
            else sum += j;
        }
        
        String s = String.valueOf(sum);
        System.out.println(s);
        return 10 - Integer.parseInt(s.charAt(s.length() - 1) + "");
    }    

    public checksum_part1() {
    }
    
    public static void main(String[] args) {
        System.out.println(new checksum_part1().checksum_part1(3600029145l));
    }
}
