public class differentValuesInMultiplicationTable2 {
    public static void main(String[] args) {
        differentValuesInMultiplicationTable2(4,4);
    }

    private static int differentValuesInMultiplicationTable2(int n, int m)
    {
        StringBuilder builder = new StringBuilder();
        int count = 0;
        //get the cell values
        for(int i=1;i<=n;i++) {
            for(int j=1;j<=m;j++) {
                int cell = i*j;
                String s = String.valueOf(cell);
                if(!builder.toString().contains(s)) {
                    builder = builder.append(s+" ");
                    count++;
                }
            }
        }
        System.out.println(builder.toString());
        return count;
    }
}
