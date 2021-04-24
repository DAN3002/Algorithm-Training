function makePalindrome (str) {
   str = [...str];
   let count = 0;

   while(!isPalidrome(str)){
      str.shift();
      count++;
   }

   return count;
}

function isPalidrome(str) {
   for(let i = 0; i <= Math.floor(str.length / 2); i++){
      if(str[i] != str[str.length - 1 - i]) return false;
   }
   return true;
}
