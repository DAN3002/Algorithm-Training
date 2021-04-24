function duplicode(code){
    code = code.toLowerCase();
    let map = new Map();

    for(let i  = 0; i < code.length; i++){
        let c = code[i];
        map.set(c, (map.get(c) || 0) + 1);
    }

    let out = "";
    for(let i = 0; i < code.length; i++){
        if(map.get(code[i]) > 1) out += "#";
        else out += "*"
    }

    return out;
}
