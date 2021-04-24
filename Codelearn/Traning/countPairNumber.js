function countPairNumber(n) {
   let f = Array(n + 1).fill(1);

   for(let i = 2; i <= n; i++){
      for(let j = 2*i; j <= n; j += i) f[j] += i;
   }

   let count = 0;
   for(let i = 2; i <= n + 1; i++){
      if(i <= f[i] && f[i] <= n){
         count++
      }
   }
   return count;
}
