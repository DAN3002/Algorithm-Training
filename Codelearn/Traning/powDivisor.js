function powDivisor(n, k) {
   let primes = [], kPrime = [], nPrime = [];

   getPrimeOfK(primes, kPrime, k)

   nPrime = Array(primes.length).fill(0);
   for(let i = 2; i <= n; i++){
      let num = i;
      for(let j = 0; j < primes.length; j++){
         const prime = primes[j];
         while(num % prime == 0){
            nPrime[j]++;
            num /= prime;
         }
      }
   }

   nPrime = nPrime.map((el, index) => Math.floor(el / kPrime[index]));

   return Math.min(...nPrime);
}

function getPrimeOfK(primes, kPrime, k) {
   for(let i = 2; i <= k; i++){
      if(k % i == 0){
         let count = 0;
         primes.push(i);
         while(k % i == 0){
            count++;
            k /= i;
         }
         kPrime.push(count);
      }
   }
}