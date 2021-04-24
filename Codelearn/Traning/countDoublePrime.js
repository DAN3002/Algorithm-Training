function countDoublePrime(n) {
   let sqrt = Math.floor(Math.sqrt(n));

   let map = Array(n + 1).fill(true);

   let count = 0;
   let primes = [];
   for(let i = 2; i <= n; i++){
      if(map[i]){
         if(i <= sqrt) primes.push(i);

         let cal = 2*i - 1;
         if(!primes.some(el => cal % el == 0)) {
            count++;
            // console.log(i, cal);
         }

         for(let j = i*i; j <= n; j += i) map[j] = false;
      }
   }

   return count;
}