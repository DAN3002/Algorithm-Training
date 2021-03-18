function primeTogether(a,b){
    return gcd(a,b) == 1;
}
 
function gcd(a,b)
{
    return b == 0 ? a : gcd(b, a%b)
}