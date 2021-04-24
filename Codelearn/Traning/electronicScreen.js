function electronicScreen(s){
    let map = [
        "01011111",
        "00000101",
        "01110110",
        "01110101",
        "00101101",
        "01111001",
        "01111011",
        "01000101",
        "01111111",
        "01111101"
    ];
    let cut  = s.match(/.{8,8}/g);
    let out = "";
    for(let str of cut)
    {
        out += map.findIndex(el => el === str);
    }
    return out;
 
}
 