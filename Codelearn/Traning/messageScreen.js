function messageScreen(arr, k) {
   let current = Array.from(new Set(arr));
   return current[k-1] || -1;
}