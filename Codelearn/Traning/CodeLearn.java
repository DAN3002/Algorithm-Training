package codelearn;

public class CodeLearn {

public static void main(String[] args) 
 {
 int j = 6, i = 0;
 System.out.print("Now i value and j value: ");
 for (int x = 0; i < ++x + x++; i += x, j -= x) 
 {
 System.out.print(i + " " + j + ", ");
            x--;
 }
 } 
    
    int compareSumOfDigits(String input)
    {
        int minus = 0;
        for(int i = 0; i < input.length(); i++)
        {
            int j = Integer.parseInt(input.charAt(i) + "");
            if(j % 2 == 0) minus -= j;
            else minus += j;            
        }
        return minus;
    }
}
