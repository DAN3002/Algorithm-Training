function countSubstring(s1, s2) {
   return (s1.match(new RegExp(s2, "g")) || []).length;
}