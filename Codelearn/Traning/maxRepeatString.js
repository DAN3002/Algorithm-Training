function maxRepeatString(s1, s2) {
   s2 = Array.from(new Set([...s2])).join("");
   let arr = s1.match(new RegExp(`[${s2}]+`, 'g')) || [];
   if(arr.length == 0) return "";

   let max = arr[0].length;
   let out = arr[0];

   for(let i = 1; i < arr.length; i++){
      let el = arr[i];
      if(el.length > max){
         max = el.length;
         out = el;
      }
   }


   return out;
}