function calNumber(k) {
   const mol = 1e9 + 7;
   k %= mol;
   return (k*k)%mol;
}