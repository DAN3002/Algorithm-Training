function canChangeNumber(a, b, c, d) {
   return gcd(a,b) == gcd(c,d);
}
 
function gcd(a,b) {
   return b == 0 ? a : gcd(b, a%b);
}