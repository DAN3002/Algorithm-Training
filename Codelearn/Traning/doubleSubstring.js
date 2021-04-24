function doubleString(s1, s2) {
   let first = s1.indexOf(s2);
   let last = s1.lastIndexOf(s2);

   return first != last;
}