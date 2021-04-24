function canYugiWin(a,b,k) {
   a = a.sort((a,b) => b-a);
   b = b.sort((a,b) => a-b);

   for(let i = 0; i < a.length; i++)
   {
      if(b.length == 0) return true;
      let yugi = a[i];
      let kaiba = b[0];
      if(yugi < kaiba) return false;
      k -= (yugi - kaiba);
      b.shift();
      if(k <= 0) return true;
   }
   return false;
}
