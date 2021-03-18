function minusNumber(n, k) {
   if(n <= k) return 0;
 
   let mol = 1e9 + 7;
   let f = Array(n + 1).fill(0);
   f[n] = 1;
 
   for(let i = n; i >= 1; i--){
      if(f[i] != 0){
         const digits = Array.from(new Set([...i.toString()]))
                              .map(el => parseInt(el));
         for(let digit of digits){
            if(i - digit >= 0 && digit != 0) f[i - digit] = (f[i - digit] + f[i]) % mol;
         }
      }
   }
 
   return f[k];
}