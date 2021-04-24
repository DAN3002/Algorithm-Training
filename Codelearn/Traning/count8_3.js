function count8_3(a){
    let map8 = new Map();
    let map3 = new Map();
    let count = 0;
 
    for(let i of a)
    {
        if(i % 8 == 0)
        {
            map8.set(i, (map8.get(i) || 0) + 1);
        } else if(i % 3 == 0)
        {
            map3.set(i, (map3.get(i) || 0) + 1);
        }
    }
 
    map8.forEach((el, key) => {
        let other = key/8*3;
        count += (map3.get(other) || 0)*el;
    });
 
    return count;
}
 