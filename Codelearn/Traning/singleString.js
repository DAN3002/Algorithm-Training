function singleString(s){
    let out = "";
    while(s.length != 0)
    {
        out += s.charAt(0);
        s = s.replace(new RegExp(s.charAt(0), "g"), "");
    }
    return out;
}
 