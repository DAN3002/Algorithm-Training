function minNumberInString(str) {
   let out = (str.match(/-([0-9]+)/g) || []).concat(str.match(/[0-9]/g) || []);
   if(out.length == 0) return -1;
   return Math.min(...out.map(el => parseInt(el)));
}