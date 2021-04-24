function findNumber(n) {
   let count = n;
   let map = Array(1000).fill(true);
   for(let i = 2; i <= 1000; i++)
   {
      if(map[i])
      {
         count--;
         if(count == 0) return i * n;
         for(let j = 2*i; j <= 1000; j += i) map[j] = false;
      }
   }
}