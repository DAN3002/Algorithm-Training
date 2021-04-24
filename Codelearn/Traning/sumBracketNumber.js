function sumBracketNumber(str) {
   let cut = str.match(/{[0-9]+}/g) || [];

   let out = 0;
   let mod = 1e9 + 7;
   for(let num of cut){
      num = num.replace(/[{}]/g, "");
      out = (out + parseInt(num)) % mol;
   }

   return out;
}