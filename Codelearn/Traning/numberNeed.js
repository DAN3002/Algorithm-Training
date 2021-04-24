function numberNeed(a,b){
    let out = [];

    // a = Array.from(new Set(a))
    // b = Array.from(new Set(b))

    let map1 = new Map();
    let map2 = new Map();

    for(let i of a) map1.set(i, (map1.get(i) || 0) + 1);
    for(let i of b) map2.set(i, (map2.get(i) || 0) + 1);

    for(let i of a){
        let count = map2.get(i);
        if(!count || count == 0)
        {
            out.push(i);
        } else map2.set(i, count - 1);
    }
    for(let i of b){
        let count = map1.get(i);
        if(!count || count == 0)
        {
            out.push(i);
        } else map1.set(i, count - 1);
    }    
    // map2.forEach((el, key) => {
    //     if(!map1.has(key)) out.push(key);
    // });  

    out.sort((a,b) => a-b);
    return out;
}
