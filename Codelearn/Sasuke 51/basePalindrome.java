int basePalindrome(int l, int r, int base) {
    int count = 0;
    for(int i = l; i <= r; i++ ){
        if(isPalindrome(Integer.toString(i, base))) {
            count++;
        }
    }
    return count;
}
 
boolean isPalindrome(String str) 
{ 
    int i = 0, j = str.length() - 1; 
    while (i < j) { 
        if (str.charAt(i) != str.charAt(j)) 
            return false; 
        i++; 
        j--; 
    } 
    return true; 
} 