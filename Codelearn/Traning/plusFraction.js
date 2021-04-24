function plusFraction(arr) {
   const [a,b,c,d] = arr;

   let num = a*d + c*b;
   let den = d*b;
   let gcd = GCD(num, den);
   return [num/gcd, den/gcd];
}

function GCD(a,b) {
   return !b ? a : GCD(b, a%b);
}