function sortArrayNB(arr) {
   const odd = arr.filter((el) => el % 2 == 0);
   const even = arr.filter((el) => el % 2 == 1);

   return odd.sort((a,b) => a-b)
         .concat(even.sort((a,b) => b-a));
}