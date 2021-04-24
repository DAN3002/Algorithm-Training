function primeArray(arr) {
   const max = Math.max(...arr);

   let f = Array(max + 1).fill(true);
   f[0] = false;
   f[1] = false;
   for(let i = 2; i <= max; i++){
      if(f[i]){
         for(let j = i*i; j <= max; j += i) f[j] = false;
      }
   }

   return arr.every(el => f[el] == f[arr[0]]);
}