function maximumResult(s){
    let max = eval(s);
    for(let i = 0; i < s.length; i += 2) {
        if(s[i+1] === '*') {
            for(let j = 0; j < i; j += 2){
                const newString = s.substring(0, j) + '(' + s.substring(j, i + 1) + ')' + s.substring(i + 1);
                max = Math.max(max, eval(newString));
            }
        }
    }
 
    return max;
}