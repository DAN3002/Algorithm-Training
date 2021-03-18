function sumSpecialNumber(n, k) {
   const mol = 1000000007;
 
   let powTwo = 1;
   for(let i = 1; i <= k - 2; i++) powTwo = (powTwo*2) % mol;
 
   let powN = 1;
   let sum = 0;
   for(let i = 0; i <= k-2; i++)
   {
      sum = (sum + powN) % mol;
      powN = (powN * n) % mol;
   }
 
   return (sum*powTwo) % mol;
}