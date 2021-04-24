function indexOfPrime(a) {
   let map = Array(a + 1).fill(true);
   let index = 0;
   map[0] = false;
   map[1] = false;
   for(let i = 2; i <= a; i++)
   {
      if(map[i])
      {
         index++;
         for(let j = 2*i; j <= a; j += i) map[j] = false;
      }
   }
   return map[a] ? index : -1;
}