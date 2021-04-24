function fileNaming(names){
    let map = new Set();
    for(let name of names)
    {
        if(map.has(name))
        {
            let index = 1;
            while(map.has(name + "(" + index + ")")) index++;
            map.add(name + "(" + index + ")");
        } else map.add(name);
    }
    return Array.from(map);
}
 