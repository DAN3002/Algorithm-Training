function convertChar(s){
    let num = 9;
 
    for(let i = 0; i < s.length; i++){
        let c = s[i];
        if((/[a-z]/g).test(c)){
            if(num == -1) return "-1";
 
            s = s.replace(new RegExp(c, "g"), num);
            num--;
        }
    }
 
    return s;
}