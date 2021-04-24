function switchString(s1, s2) {
   if(s1.length != s2.length) return false;
   let map = new Map();

   for(let i = 0 ; i < s1.length; i++){
      if(s1[i] != s2[i])
      {
         let el = map.get(s1[i]);
         if(el && el != s2[i] ) return false;
      }
      map.set(s1[i], s2[i])
   }
   return true;
}