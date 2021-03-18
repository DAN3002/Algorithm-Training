function tribonacci (n) {
   const mol = 1e9 + 7;
   const f = Array(n + 1);
 
   for(let i = 0; i <= n; i++){
      if(i <= 3) f[i] = i;
      else {
         f[i] = (((f[i-3] + f[i-2]) % mol)+ f[i-1]) % mol;
      }
   }
 
   return f[n];
}