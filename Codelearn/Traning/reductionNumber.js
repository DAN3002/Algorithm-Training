function reductionNumber(n){
    let str = n.toString();

    if(str.length == 10 && n < 9876543210) return 9876543210;
    if(str.length >= 10) return -1;

    n++;
    str = n + "";
    let index = -1;
    for(let i = 0; i < str.length - 1; i++){
        if(str[i] <= str[i + 1]){
            let a = str.substring(0, i);
            let out1 =  parseInt(a + reduce(str.substring(i, str.length)));
            let out2 = parseInt(reduce(str));

            if(!check(out1)) return out2;
            if(!check(out2)) return out1;
            return Math.min(out1, out2);
        }
    }
    return n;
}

function check(n) {
   n = n + "";
   for(let i = 0; i < n.length - 1; i++){
      if(n[i] <= n[i+1]) return false;
   }
   return true;
}

function reduce(str){
    let size = str.length;
    let first = Math.max(parseInt(str[0]) + 1, size - 1);

    if(first == 10) {
        first = size;
        size++;        
    }

    let out = first + "";
    if(size > 10) return -1;

    for(let i = size - 2; i >= 0; i--){
        out += i;
    }

    return parseInt(out);
}
