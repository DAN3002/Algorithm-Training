String distanceToZ(int[] a)
{
        String str = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder  output = new StringBuilder("");
        for(int i : a)
        {
            if(i == -1) output.append(" ");
            else output.append(str.charAt(25 - i));
        }
        return output.toString();
}
 