function secretLetter(str){
    let map = "abcdefghijklmnopqrstuvwxyz";
    let out = '';
    for(let i = 0; i < str.length; i++)
    {
        let c = str.charAt(i);
        if((c + "").toUpperCase() === c)
        {
            if(c === 'Z') out += 'A';
            let index = map.indexOf((c + "").toLowerCase());        
            out += index !== -1 ? (map.charAt(index + 1) + "").toUpperCase() : c;            
        } else {
            if(c === 'z') out += 'a';
            let index = map.indexOf(c);        
            out += index !== -1 ? map.charAt(index + 1) : c;
        }
 
    }
    out = out.replace(/a/g, "A");
    out = out.replace(/e/g, "E");
    out = out.replace(/o/g, "O");
    out = out.replace(/u/g, "U");
    out = out.replace(/i/g, "I");
    return out;
}
 