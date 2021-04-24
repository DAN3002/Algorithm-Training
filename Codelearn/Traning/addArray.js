function addArray(a,b) {
   let map = new Map();
   for(let i of a) map.set(i, true);

   let out = [];
   for(let i of b){
      if(map.get(i)) out.push(i);
   }

   out = Array.from(new Set(out));
   return out.sort((a,b) => a-b);
}
