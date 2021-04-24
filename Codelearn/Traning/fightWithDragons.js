function fightWithDragons(x, d, h){
    if(x <= d) return 1;
    if(d <= h) return -1;    
    let count = 0;
    while(x > 0)
    {
        x -= d;
        count++;
        if(x <= 0) return count;
        x += h;
    }
    return count;
}
 