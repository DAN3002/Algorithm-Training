function mostAppear(str) {
   let max = 0;
   let cMax = null;
   let map = Array.from(str);
   while(map.length != 0)
   {
      let c = map[0];
      let old = map.length;
      map = map.filter((item) => item != c);
      let count = old - map.length;
      if(count > max)
      {
         max = count;
         cMax = c;
      }
   }
   return cMax;
}