function changeKeyboard(str) {
   let map = [
      "1234567890",
      "qwertyuiop",
      "asdfghjkl",
      "zxcvbnm"
   ];
   let change = 0;
   let current = map.find(el => el.includes(str.charAt(0)));
   for(let i = 1; i < str.length; i++)
   {
      let c = str.charAt(i);
      if(!current.includes(c))
      {
         change++;
         current = map.find(el => el.includes(c));
      }
   }
   return change;
}