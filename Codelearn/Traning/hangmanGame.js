function hangmanGame(text, answers) {
   let life = 6;
   let map = new Map();

   text = Array.from(new Set([...text]));
   let length = text.length;
   for(let i = 0; i < text.length; i++) map.set(text[i], true);

   for(let c of answers){
      if(!map.get(c)){
         life--;
         if(life == 0) return false;
      } else {
         length--;
         if(length == 0) return true;
         map.set(c, false);
      }
   }

   return length == 0;
}