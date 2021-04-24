function canMakePalindromeString(str) {
   let map = new Map();
   for(let i = 0; i < str.length; i++){
      let c = str[i];
      map.set(c, (map.get(c) || 0) + 1);
   }

   let check = true;
   map.forEach((value, key) => {
      if(value % 2 != 0) check = false;
   })
   return check;
}