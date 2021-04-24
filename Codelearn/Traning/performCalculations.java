String performCalculations(String s)
{
        BigInteger sum = new BigInteger("0");
        String[] split = s.split("\\+");
        for(String el : split)
        {
            sum = sum.add(new BigInteger(el));
        }
        return sum.toString();
}
 