function decodePhoneMessage(str) {
   if(str.length == 0) return "";
   let map =
   [
      [' ', '0'],
      ['.', ',', '?', '!', '1'],
      ['a', 'b', 'c', '2'],
      ['d', 'e', 'f', '3'],
      ['g', 'h', 'i', '4'],
      ['j', 'k', 'l', '5'],
      ['m', 'n', 'o', '6'],
      ['p', 'q', 'r', 's', '7'],
      ['t', 'u', 'v', '8'],
      ['w', 'x', 'y', 'z', '9']
   ];
   let cut = str.match(/([0-9])\1*/g);
   let out = "";
   for(let s of cut)
   {
      let length = s.length;
      out += map[parseInt(s.charAt(0))][length - 1];
   }
   return out;
}