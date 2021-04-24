function countWaySum(n, a, b) {
   if(n < Math.min(a,b)) return 0;

   let mol = 1000000007;
   let f = Array(n + 1).fill(0);

    f[0] = 1;
   for(let i = 1; i <= n; i++)
   {
      f[i] = ((f[i-a] || 0) + (f[i-b] || 0)) % mol;
   }

   return f[n];
}
