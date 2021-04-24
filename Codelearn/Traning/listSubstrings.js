function listSubstrings(s) {
   let max = "";
   (s.match(/[a-z]+|[A-Z]+/g) || []).map(el => {
      if(el.length > max.length) max = el;
   })
   return max;
}