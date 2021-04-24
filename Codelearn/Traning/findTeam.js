function findTeam(arr, k) {
   let map = new Map();

   for(let i of arr) map.set(i, (map.get(i) || 0) + 1);

   let out = [];
   map.forEach((value, key) => {
      if(value == k) out.push(key);
   });

   out.sort((a,b) => a-b);
   return out;
}