function colorfulFlowers(n, m, a, b){
    let pot = Math.ceil(n/a);
    for(let i = -1; i <= 1; i++)
    {
        if(m < pot + i) continue;
        let pot2 = Math.ceil(m/(pot + i));
        if(pot2 <= b) return true;
    }
    pot = Math.ceil(m/b);
    for(let i = -1; i <= 1; i++)
    {
        if(n < pot + i) continue;
        let pot2 = Math.ceil(n/(pot + i));
        if(pot2 <= a) return true;
    }    
    return false;
}
 