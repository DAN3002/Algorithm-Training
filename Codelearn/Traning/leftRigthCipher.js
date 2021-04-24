function leftRigthCipher(s){
    let res = "";
    let len = s.length;
    let dir = len%2===0?-1:1;
    let l = 0, j = s.length-1;
    for(let i = 0; i < len; i++) {
        if(dir < 0) {
            res = s[j--] + res;
        }else{
            res = s[l++] + res;
        }
        dir*=-1;
    }
    return res;
}
 