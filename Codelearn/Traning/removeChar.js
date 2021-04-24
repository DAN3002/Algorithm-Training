function removeChar(s1, s2) {
   s2 = Array.from(new Set([...s2])).join("");

   return s1.replace(new RegExp(`[${s2}]`, 'g'), "");
}