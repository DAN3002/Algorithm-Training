function factorialPrimeDivisor(n) {
   let f = Array(n + 1).fill(true);
 
   let count = 0;
   for(let i = 2; i <= n; i++){
      if(f[i]){
         count++;
 
         for(let j = i*i; j <= n; j += i) f[j] = false;
      }
   }
 
   return count;
}