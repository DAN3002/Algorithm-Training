function stringXor(s, t){
    let str = "";
    for(let i = 0; i < s.length; i++)
    {
        if(s.charAt(i) == t.charAt(i)) str += '0';
        else str += '1';
    }
    return str;
}
 