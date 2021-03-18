function checkOutRangeChar(str, range){
    let map = [];
    for(let i = 0; i < str.length; i++) map.push(str.charCodeAt(i));
    // return map;
    let count = 0;
    for(let i = 0; i < map.length - 1; i++)
    {
        if(Math.abs(map[i] - map[i+1]) >= range) count++;
    }
    return count;
}
 