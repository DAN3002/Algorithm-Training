function bestFriend(a, b){
    let max = Math.max(...b), min = Math.min(...b);
 
    let count = 0;
    let old = a.length;
    a = a.filter(el => el <= max);
    count += old - a.length;
 
    old = a.length;
    a = a.filter(el => el <= min);
    let c1 = a.length, c2 = old - a.length;
    if(c1 == c2) return c1 + count;
    if(c1 > c2) return count + c2 + Math.ceil((c1 - c2) / 2);
    return count + c2;
}
 