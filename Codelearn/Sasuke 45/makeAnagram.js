function makeAnagram(s1, s2) {
   return Math.min(count(s1,s2), count(s2,s1));
}
 
function count(s1, s2) {
   let map1 = new Map(),
      map2 = new Map();
 
   for(let i = 0; i < s1.length; i++) map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
   for(let i = 0; i < s2.length; i++) map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
 
   let count = 0;
   map1.forEach((el, key) => {
      count += Math.abs(el - (map2.get(key) || 0));
   });
 
   map2.forEach((el, key) => {
      if(!map1.get(key)) count += el;
   });
 
   return count == s1.length + s2.length ? -1 : count;
}