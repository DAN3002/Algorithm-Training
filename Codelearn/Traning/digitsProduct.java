int digitsProduct(int product)
{
        for(int i = 1; i < 99999; i++) {
            String digits = String.valueOf(i);
            int result = Character.getNumericValue(digits.charAt(0));
            for(int j = 1; j < digits.length(); j++)
            {
                result *= Character.getNumericValue(digits.charAt(j));
            }
            if(result == product) return Integer.parseInt(digits);
        }
        return -1;
}
 