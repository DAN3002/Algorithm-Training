function countString(s){
    let set = new Set();
    for(let i = 1; i <= s.length; i++)
    {
        for(let j = 0; j <= s.length - i; j++)
        {
            set.add(s.substring(j, j+i));
        }
    }
    return set.size;
}
 