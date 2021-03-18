function countWaySum(n, a, b) {
   if(n < Math.min(a,b)) return 0;
 
   let mol = 1000000007;
   let f = Array(n + 1).fill(0);
 
   f[a] = 1;
   f[b] = 1;
   for(let i = Math.max(a,b) + 1; i <= n; i++)
   {
      f[i] = (f[i-a] + f[i-b]) % mol;
   }
 
   return f[n];
}