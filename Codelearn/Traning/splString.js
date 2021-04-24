function next(s, p, l, n){
   let cur = p + l;
   if(s[p]=='0' || cur > s.length) return 0;
   let ret = 0;
   let t = Number(s.substring(p, cur));
   if(t > n){
    if(cur == s.length){
      return 1;
    }
    for(let i = l; i <= (s.length - cur); i++){
      ret += next(s, cur, i, t);
    }
   }
   return ret;
}

function splString(str){
  if(str[0]=='0') return 0;

  let res = 0;
  for(let i = 1; i <= str.length;i++){
    res += next(str, 0, i, 0);
  }
  return res;
}
