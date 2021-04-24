function sortLined(a){
    return Math.min(count(1,a), count(0,a)) >> 1;
}
 
function count(start, a)
{
    let count = 0;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] != start) count++;
        start = start == 1 ? 0 : 1;
    }
    return count;
}