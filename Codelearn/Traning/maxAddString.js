function maxAddString(arr, k) {
   if(arr.every(el => el == 0)) return '0';
   arr.sort((a,b) => b-a);

   arr = arr.slice(0, k);

   arr = arr.sort((a,b) => {
      a = a.toString();
      b = b.toString();
 
      return (b+a).localeCompare(a+b);
   });
    
   return arr.join(""); 
}

String maxAddString(int[] a, int k) {
    ArrayList<Integer> arr = new ArrayList<Integer>();
    for(int i : a) arr.add(i);

    Collections.sort(arr, Collections.reverseOrder());

    ArrayList<String> out = new ArrayList<String>();
    for(int i = 0; i < k; i++)
    {
        out.add(arr.get(i) + "");
    }

    Collections.sort(out, (o1, o2) -> -(o1 + o2).compareTo(o2 + o1));
    return String.join("", out);
}