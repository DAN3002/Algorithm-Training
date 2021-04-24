let a;
let current;
let map;

function kthSpecialNumber(arr, k) {
   if(arr[0] == 0 && arr.length == 1) return "-1";

   arr.sort((a,b) => a-b);

   let size = 0,
      count = 0;
   while (k > count) {
      k -= count;
      size++;
      if(arr[0] == 0)
      {
         count = (arr.length - 1)*Math.pow(arr.length, size - 1);
      } else count = Math.pow(arr.length, size);
   }

   map = Array(size).fill(null);
   a = k;

   find(0, arr);

   return current;
}

function find(index, arr) {
   if(a <= 0) return ;
   if(index >= map.length)
   {
      a--;
      if(a == 0) current = map.join('');
   } else {
      for(let i = 0; i < arr.length; i++){
         if(a <= 0) break;
         if(index == 0 && arr[i] == 0) continue;
         map[index] = arr[i];
         find(index + 1, arr);
      }
   }
}