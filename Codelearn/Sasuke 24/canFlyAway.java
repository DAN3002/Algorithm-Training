boolean canFlyAway(int h, int[] arr)
{
    int last = arr[0];
    if(last < h) return false;
   for(int i = 1; i < arr.length; i++)
   {
 
       int el = arr[i];
       last = arr[i-1];
       if(el < h) return false;
       if(last + 1000 > el && last != el) return false;
   }
   return true;
}
 