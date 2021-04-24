function maxCountPrimeFactor(arr) {
   let max = Math.max(...arr);

   let primes = [];
   let map = Array(max + 1).fill(true);
   for(let i = 2; i <= max; i++)
   {
      if(map[i])
      {
         primes.push(i);
         for(let j = 2*i; j <= max; j += i) map[j] = false;
      }
   }

   let out = arr[0];
   max = 0;
   for(let i = 0; i < arr.length; i++)
   {
      let count = primes.filter(prime => arr[i] % prime == 0).length;
      if(count > max)
      {
         max = count;
         out = arr[i];
      }
   }

   return out;
}