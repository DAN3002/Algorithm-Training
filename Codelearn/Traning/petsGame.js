function petsGame(x,y){
    const cal = x**(y/x);
    if(cal == y) return 0;
    return cal > y ? 1 : -1;
    
}