function minPerimeter(s){
    let min = -1;
    for(let i = 2; i <= Math.floor(Math.sqrt(s)); i++)
    {
        if(s % i == 0)
        {
            if(min = -1) min = i + s/i;
            else min = Math.min(min, i + s/i);
        }
    }    
    return min == -1 ? -1 : min*2;
}
 