function minNumberArray(a){
    let min = 0;
    let map = new Map();
    for(let i of a)
    {
        map.set(i, true);
        if(i == min)
        {
            while(map.get(min)){
                min++;
            }
        }        
    }
    return min;
}