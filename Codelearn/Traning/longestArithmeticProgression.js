function longestArithmeticProgression(arr, d) {
   let f = Array(1e6 + 1).fill(0);

   let max = 0;
   for(let i of arr){
      f[i] = Math.max((f[i-d] || -1) + 1, 1);
      max = Math.max(f[i], max);
   }

   return max;
}
