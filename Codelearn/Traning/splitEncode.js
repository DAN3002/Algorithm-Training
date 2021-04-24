function gen (str) {
   str = [...str]

   // if (str.some(el => !'_#'.includes(el))) return 'NOT VALID'

   str = str.map(el => {
      const index = el.charCodeAt(0) - 96;
      return '#'.repeat(index);
   });

   return str.join("_");
}

function splitEncode(str) {
   for(let i = 0; i < str.length; i++){
      if(!'_#'.includes(str[i])) return 'NOT VALID';
   }

   str = str.split("_");

   str = str.map(el => String.fromCharCode(el.length + 96));
   return str.join("");
}
