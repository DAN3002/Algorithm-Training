function grasshopper2(n, a) {
    if(n == 0) return 0;
   let f = Array(n + 1).fill(0);
   f[0] = 1;
   for(let i = 1; i <= n; i++)
   {
      for(let j of a)
      {
         if(i - j >= 0) f[i] += f[i-j];
      }
   }
   return f[n];
}