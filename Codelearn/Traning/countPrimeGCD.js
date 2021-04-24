function countPrimeGCD(L, R){
   const f = [];
   for(let i = 0; i <= R; i++) {
      f.push(Array(R + 1).fill(true));
   }

   const primes = Array(R + 1).fill(true);
   primes[0] = false; primes[1] = false;
   for (let i = 2; i <= R; i++) {
      if(primes[i]) for (let j = i*i; j <= R; j += i) primes[j] = false;
   }

   let count = 0;

   for(let a = 1; a <= R; a++) {
      for(let b = 1; b <= R; b++) {
         if(f[a][b]) {
            let i = 1;
            while(a*i <= R && b*i <= R){
               if(primes[i] && a < b && a*i >= L) {
                  count++;
               }
               f[a*i][b*i] = false;
               i++;
            }
         }
      }
   }

   return count;
}
