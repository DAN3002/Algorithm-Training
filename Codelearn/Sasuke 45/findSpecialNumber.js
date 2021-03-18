function findSpecialNumber(num, k) {
   const mol = 1e9 + 7;
   const arr = getBaseArray(num, k);


   // console.log(arr);
   let lessIndex = arr.findIndex(el => el > 1);

   if(lessIndex == -1) return num;

   let changeIndex = -1;
   for(let i = lessIndex - 1; i >= 0; i--){
      if(arr[i] == 0){
         changeIndex = i;
         break;
      }
   }

   if(changeIndex == -1) return powMod(k, arr.length);
   let ans = 0;
   arr[changeIndex] = 1;

   for(let i = changeIndex; i >= 0; i--){
      if(arr[i] == 1) ans = (ans + powMod(k, arr.length - 1 - i)) % mol;
   }

   return ans;
}

function powMod(a, b) {
   const mol = 1e9 + 7;
   let ans = 1;
   for(let i = 1; i <= b; i++){
      ans = (ans * a) % mol;
   }
   return ans;
}

function getBaseArray(num, k) {
   let out = [];

   while(num != 0){
      let mod = num % k;
      num = Math.floor(num / k);
      out.unshift(mod);
   }

   return out;
}
