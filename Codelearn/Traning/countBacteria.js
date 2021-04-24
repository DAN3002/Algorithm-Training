function countBacteria(x){
    if(x < 2) return 1;
    let other = 0;
 
    while(x != 1)
    {
        if(x % 2 != 0)
        {
            x--;
            other++;
        } else x/= 2;
    }
    return x + other;
}
 