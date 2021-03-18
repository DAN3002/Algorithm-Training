function equalArray(a,b){
    let min, max;
    if(a.length > b.length)
    {
        max = a;
        min = b;
    }else {
        max = b;
        min = a;
    }
 
    let map = new Map();
    for(let i of max)
    {
        map.set(i, (map.get(i) || 0) + 1);
    }
 
    for(let i of min)
    {
        let count = map.get(i);
        if(!count || count <= 0) return false;
        map.set(i, count-1);
    }
 
    return true;
 
}