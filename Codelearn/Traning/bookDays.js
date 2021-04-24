function bookDays(a) {
   let sum = 0;
   let count = 0;
   for(let i = 0; i < a.length; i++)
   {
      sum += a[i];
      if(a[i] > (sum)/(i+1))
      {
          count++;
      }
   }
   return count;
}