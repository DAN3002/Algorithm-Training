function minMoney(n, arr) {
   let f = Array(n + 1).fill(0);
 
   for(let i = 1; i <= n; i++)
   {
      let min = -1;
 
      for(let j of arr)
      {
         if(i == j) min = 0;
         if(i - j >= 0)
         {
            let el = f[i-j];
            if(el != 0)
            {
               if(min == -1) min = el;
               else min = Math.min(el, min);
            }
         }
      }
 
      f[i] = min + 1;
   }
 
   return f[n];
}