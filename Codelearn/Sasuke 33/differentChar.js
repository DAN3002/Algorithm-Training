function differentChar(s1, s2) {
   let count = 0;
   let map1 = new Map();
   let map2 = new Map();
 
   for(let i = 0; i < s2.length; i++)
   {
      let key = s2.charAt(i);
      map2.set(key, (map2.get(key) || 0) + 1);
   }
   for(let i = 0; i < s1.length; i++)
   {
      let key = s1.charAt(i);
      if(!map1.get(key) && !map2.get(key))
      {
         map1.set(key, 1);
         count++;
      }
   }
 
   return count;
}