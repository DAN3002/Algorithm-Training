function foulInFootball(a){
    let map = new Map();
 
    let out = [];
    for(let i of a) {
        map.set(i, (map.get(i) || 0) + 1);
        if(map.get(i) === 3){
            map.set(i, 0);
            out.push(i);
        }
    }
 
    return out;
}