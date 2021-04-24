function divideMoney(n) {
   let f = [];
   for(let i = 0; i <= n; i++) f.push(Array(n+1).fill(0));

   f[0][0] = 1;
   for(let i = 1; i <= n; i++)
   {
      for(let j = 0; j <= n; j++)
      {
         if(j < i) f[i][j] = parseInt(f[i-1][j]);
         else f[i][j] = parseInt(f[i-1][j]) + parseInt(f[i, j - i]);
      }
   }

   return f[n][n];
}
