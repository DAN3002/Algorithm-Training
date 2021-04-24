function prettyArray(arr) {
   const odd = arr.filter(el => el % 2 == 0).length;
   return Math.min(odd, arr.length - odd);
}
