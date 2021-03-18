function maxPoint(a, k) {
   a.sort((a,b) => a-b);
   for(let i = 0; i < a.length && k >= a[i]; i++)
   {
      k += a[i];
   }
   return k;
}