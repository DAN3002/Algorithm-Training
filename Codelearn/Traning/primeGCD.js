function primeGCD(a, b) {
   const gcd = GCD(a,b);
   return isPrime(gcd);
}

function isPrime(n) {
   if(n < 2) return false;

   for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
      if (n % i == 0) return false;
   }
   return true;

}

function GCD(a,b) {
   return !b ? a : GCD(b, a%b);
}
