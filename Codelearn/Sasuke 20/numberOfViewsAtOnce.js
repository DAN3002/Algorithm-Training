function numberOfViewsAtOnce(a){
    let map = Array(getMax(a) + 1);
    map.fill(0);
    for(let el of a)
    {
        for(let j = el[0]; j <= el[1]; j++)
        {
            map[j]++;
        }
    }
    // console.log(map);
    return Math.max(...map);
}
 
function getMax(a){
  return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
}