long factorial(int n) 
{ 
    long fact = 1; 
    for (int i = 2; i <= n; i++) 
        fact = fact * i; 
    return fact; 
} 
long countPermutation(String str) {
    str = str.toLowerCase();
    int length = str.length(); 
    
    int[] freq = new int[26]; 
    
    for (int i = 0; i < length; i++) 
        if (str.charAt(i) >= 'a') 
            freq[str.charAt(i) - 'a']++; 
    
    long fact = 1; 
    for (int i = 0; i < 26; i++) 
        fact = fact * factorial(freq[i]); 
    
    return factorial(length) / fact;     
}