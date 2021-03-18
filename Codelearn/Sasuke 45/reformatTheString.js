function reformatTheString(str){
    str = [...str]
    const num = str.filter((el) => '0123456789'.includes(el))
    const alphabet = str.filter((el) => !'0123456789'.includes(el))
 
    if(Math.abs(num.length - alphabet.length) > 1) return "";
 
    let out = ""
    let check = alphabet.length <= num.length;
    while(num.length != 0 || alphabet.length != 0){
        console.log(check);
        if(check){
            out += num.shift();
            check = false;
        } else {
            out += alphabet.shift();
            check = true;
        }
 
        // if(num.length != 0) out += num.shift();
        // else out += alphabet.shift();
    }
 
    return out;
}