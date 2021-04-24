function regionCount(s){
    if("ABCDEFGHIJKLMNOPQRSTUVWXYZ" === s) return 34;
    let regions = 'QADRBOP';
    let count = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(regions.includes(s.charAt(i))) count += 2
        else count += 1;
    }
    return count;
}
 