function cutTheRope(wood){
    if(wood <= 10) return 0;
    let cut = Math.floor(wood / 10);
    if((wood % 10 != 0)) cut++;
    let i = 1;
    let count = 0;
    while(i < cut)
    {
        i *= 2;
        count++;
    }
    return count;
}
 