function nLastChar(a,b,n) {
   let mol = Math.pow(10, n);
 
   let out = 0;
   let pow = 1;
   for(let i = 0; i <= b; i++){
      out = (out + pow) % mol;
      pow = (pow * a) % mol;
   }
 
   return (out + "").padStart(n, '0');
}