function maxnumberinstring(str) {
   let map = str.match(/[0-9]+/g);
   return map ? Math.max(...map.map(el => parseInt(el))) : -1;
}