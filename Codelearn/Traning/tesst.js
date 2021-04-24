function test(arr, k)
{
   let num = 0;
   while(k > 0)
   {
      num++;
      if(check(num, arr))
      {
         k--;
      }
   }
   return num;
}

function check(num, arr) {
   let str = num + "";
   for(let i = 0; i < str.length; i++)
   {
      if(!arr.includes(Number(str[i]))) return false;
   }
   return true;
}