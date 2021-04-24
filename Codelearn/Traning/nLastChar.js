function nLastChar(a,b,n) {
   let mol = Math.pow(10, n);

   let out = 0;
   let pow = 1;
   for(let i = 0; i <= b; i++){
      out = (out + pow) % mol;
      pow = (pow * a) % mol;
   }

   return (out + "").padStart(n, '0');
}

String nLastChar(int a, int b, int n)
{
   BigInteger out = BigInteger.ZERO;
   BigInteger pow = BigInteger.ONE;

   for(int i = 0; i <= b; i++)
   {
     out = out.add(pow);
     pow = pow.multiply(BigInteger.valueOf(a));
   }

   String str = out.toString();
   if(str.length() < n)  return String.format("%1$" + n + "s", str).replace(' ', '0');
   return str.substring(str.length() - n);
}
