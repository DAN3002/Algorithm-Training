function gcdArray(arr) {
   let gcd = arr[0];
   for(let i = 1; i < arr.length; i++)
   {
      gcd = GCD(gcd, arr[i]);
   }
   return gcd;
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}