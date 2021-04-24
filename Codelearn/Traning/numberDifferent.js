function numberDifferent(a){
    let map = new Map();
    for(i of a)
    {
        let count = map.get(i) || 0;
        map.set(i, count+1);
    }
    let check = [];
    let out = null;
    map.forEach((count, key, map) => {
        if(check.length == 0) check.push([key, count]);
        else if(check.length == 1) 
        {
            if(check[0][1] != count) check.push([key, count]);
        } else {            
            out = check.find(el => el[1] != count)[0];
        }
    });
    return out == null ? check[1][0] : out;
}
 