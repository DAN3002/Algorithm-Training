function reverseInParentheses(s){
  for(let i = 0; i < s.length; i++) 
  {
    if(s[i] === ")") {
      s = s.substring(0, i) + s.substring(i + 1);
      i--;
      let reversed = "";
      while(s[i] !== "(") {
        reversed += s[i];
        s = s.substring(0, i) + s.substring(i + 1);
        i --;
      }
      s = s.substring(0, i) + reversed + s.substring(i + 1);
      i += reversed.length - 1;
    }
  }
  return s;
}
 