function redCard(n, a)
{
      if(n < a.length || a.some(el => el > n)) return (0).toFixed(10);
      let min = Math.min(n - a.length, a.length);
      let cal1 = 1;
      let cal2 = 1;
      for(let i = 0; i < min; i++)
      {
         cal1 *= i + 1;
         cal2 *= n - i;
      }
      return (cal1 / cal2).toFixed(10);
}