function kthBiggestFrequency(a, k) {
   let map = new Map();
   for(let i of a)
   {
      map.set(i, (map.get(i) || 0) + 1);
   }

   let arr = [];
   map.forEach((item, key) => {
      arr.push([key, item]);
   });

   arr.sort((a,b) => b[1] - a[1]);
   let old = null;
   for(let i = 0; i < arr.length; i++)
   {
      let el = arr[i];
      if(old != el[1])
      {
         k--;
         old = el[1];
         if(k == 0)
         {
            let out = el[0];
            let max = a.findIndex(el => el == out);
            for(let j = 1; i + j < arr.length && arr[i+j][1] == old; j++)
            {
               let index = a.findIndex((el,index) => {
                  if(index == max) return true;
                  return el == arr[i+j][0];
               });
               if(index < max)
               {
                  max = index;
                  out = arr[i+j][0];
               }
            }
            return out;
         }
      }
   }
   return -1;
}