function encodePhoneMessage(str) {
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

   let out = "";
   for(let i = 0; i < str.length; i++)
   {
      let c = str.charAt(i);
      let num = map.findIndex(el => el.includes(c));
      let count = map[num].findIndex(el => el == c) + 1;
      if(out.charAt(out.length - 1) == num) out += "-";
      out += (num + "").repeat(count);
   }
   return out;
}