function prevPalindrome(x){
    for(let i = x - 1; i >= 0; i--)
    {
        if(check(i + "")) return i;
    }
}
 
function check(str)
{
    for(let i = 0; i < str.length >> 1; i++)
    {
        if(str.charAt(i) != str.charAt(str.length - i - 1)) return false;
    }
    return true;
}
 