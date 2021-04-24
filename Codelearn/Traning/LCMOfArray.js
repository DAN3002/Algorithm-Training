function lcmOfArray(arr) {
   let mol = 1000000007;
   arr.sort((a,b) => a-b);

   for(let i = 0; i < arr.length; i++)
   {
      for(let j = 0; j < i; j++)
      {
           let gcd = GCD(arr[i], arr[j]);
           arr[i] /= gcd;
      }
   }

   return arr.reduce((a,b) => (a*b) % mol, 1);
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}
