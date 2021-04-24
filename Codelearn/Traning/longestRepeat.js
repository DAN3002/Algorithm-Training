function longestRepeat(s){
    let map = new Map();

    for(let i = 0; i < s.length; i++)
    {
        let c = s[i];
        if((/[a-zA-Z]/g).test(c))
        {
            map.set(c, (map.get(c) || 0) + 1);
        }
    }

    let out = "";

    for(let i = 0; i < s.length; i++)
    {
        let c = s[i];
        if((map.get(c) || -1) > 1) out += c;
    }

    return out;
}
