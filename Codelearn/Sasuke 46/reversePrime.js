function reversePrime(L, R) {
   let max = 1e7;
 
   let f = Array(max + 1).fill(true);
   let primes = [];
 
   for(let i = 2; i <= max; i++){
      if(f[i]){
         primes.push(i);
         for(let j = i*i; j <= max; j += i) f[j] = false;
      }
   }
   return primes.map(el => reverseNum(el))
               .filter(el => L <= el && el <= R)
               .sort((a,b) =>  a-b);
}
 
function reverseNum(n) {
   return parseInt([...n.toString()].reverse().join(""));
}