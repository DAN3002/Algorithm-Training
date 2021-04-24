function sumPrimeFactor(n) {
   let count = 0;
   let map = Array(n + 1).fill(true);

   for(let i = 2; i <= n; i++){
      if(map[i])
      {
         if(n%i == 0) count += i;
         for(let j = 2*i; j <= n; j += i) map[j] = false;
      }
   }

   return count;
}