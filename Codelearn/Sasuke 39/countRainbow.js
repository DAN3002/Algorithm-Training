function countRainbow(str) {
   let map = new Map();

   for(let i = 0; i < str.length; i++){
      let c = str[i];
      map.set(c,(map.get(c) || 0) + 1);
   }

   let arr = [
      ['w', 'yellow', 1],
      ['b', 'blue', 1],
      ['t', 'violet', 1],
      ['a', 'orange', 1],
      ['i', 'indigo', 2],
      ['n', 'green', 1],
      ['r', 'red', 1]
   ];

   let min = str.length;
   for(let el of arr){
      min = Math.min(min, count(map, el[0], el[1], el[2]));
   }

   return min;
}

function count(map, key, full, time) {
   let out = map.get(key) / time;

   for(let s of [...full]){
      map.set(s, map.get(s) - out);
   }

   return out;
}
