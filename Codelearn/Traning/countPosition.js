function countPosition(s){
    let set = new Set([0]);
    let current = 0;
    for(let i = 0; i < s.length; i++)
    {
        current += s.charAt(i) == 'L' ? 1 : -1;
        set.add(current);
    }
    return set.size;
 
}
 