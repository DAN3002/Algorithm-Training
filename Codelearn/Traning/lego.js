function lego(a, b, n) {
   let max = Math.max(a,b), min = Math.min(a,b);

   for(let i = Math.floor(n / max); i >= 0; i--)
   {
      let cal = (n - i*max) / min;
      if(Number.isInteger(cal)) return cal + i;
   }
   return -1;
}