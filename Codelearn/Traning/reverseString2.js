function reverseString(s){
    s = [...s];
    let arr =  s.filter(el => /[a-zA-Z]/.test(el)).reverse();

    for(let [i, el] of s.entries()) {
        if(/[a-zA-Z]/.test(el)) {
            s[i] = arr.shift();
        }
    }
    return s.join("");
}
