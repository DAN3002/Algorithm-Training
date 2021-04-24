function countLike(arr) {
   let map = new Map();

   for(let i of arr){
      map.set(i, (map.get(i) || 0) + 1);
   }

   let count = 0;
   map.forEach((item, i) => {
      count += item % 2 != 0 ? 1 : 0;
   });

   return count;

}