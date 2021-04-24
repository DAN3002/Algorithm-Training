String divided(String num)
{
    if(num.equals("0")) return "YES";
    int l = num.length(); 
    
    if (l == 1) return "NO"; 
    
    int number = (num.charAt(l-2) - '0')*10 + (num.charAt(l-1) - '0');
    if (number%4 != 0) return "NO"; 
    
    int sum = 0; 
    for (int i=0; i<l; i++) 
        sum += (num.charAt(i) - '0'); 
    
    return !(sum%9 != 0)? "YES" : "NO";
}
 