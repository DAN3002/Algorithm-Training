function canSwitchString(s1, s2) {
   if(s1.length != s2.length) return -1;

   let count = 0;
   let map = new Map();
   for(let i = 0; i < s1.length; i++)
   {
      if(s1[i] != s2[i]){
         let change = map.get(s2[i]);
         if(change)
         {
            let index = change.indexOf(s1[i]);
            if(index == -1)
            {
               count++;
               let arr = map.get(s1[1]) || [];
               arr.push(s2[i]);
               map.set(s1[i], arr);
            } else {
               change.splice(index, 1);
               map.set(s2[i], change);
            }
         } else {
            count++;
            let arr = map.get(s1[1]) || [];
            arr.push(s2[i]);
            map.set(s1[i], arr);
         }
      }
   }
   return count;
}
