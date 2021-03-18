function snailUp(x,y,z){
    if(z <= x) return 1;
    let count = 0;
    while(z > 0){        
        z -=x;
        
        if(z < 0) break;
        count++;
        z += y;        
    }
    return count;
}