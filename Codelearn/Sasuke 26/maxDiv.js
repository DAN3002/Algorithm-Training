function maxDiv(a){
    if(a.length == 1) return 0;
    if(a.length == 2) return Math.max(div(a[0], a[1]), div(a[1], a[0]));
    let map1 = a.filter(el => el > 0);
    let map2 = a.filter(el => el < 0);
 
    let cal1 =  Math.floor(Math.max(...map1) / Math.min(...map1)) || 0;
    let cal2 = Math.floor(-Math.min(...map2) / -Math.max(...map2)) || 0;
 
    return Math.max(cal1, cal2);
}
 
function div(a,b)
{
    return (a - (a%b)) / b;
}
 