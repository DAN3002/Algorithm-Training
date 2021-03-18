function randomArray(arr, k) {
   let map = new Map();
 
   for(let i of arr) map.set(i, (map.get(i) || 0) + 1);
 
   let out = true;
   map.forEach((item, i) => {
      if(item > k) out =  false;
   });
 
   return out;
}