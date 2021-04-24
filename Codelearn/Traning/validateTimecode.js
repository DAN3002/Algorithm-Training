function validateTimecode(str) {
   return str.length == 29 ? (/^([\d:,]+)\s+-{2}\>\s+([\d:,]+)/g).test(str) : false;
}