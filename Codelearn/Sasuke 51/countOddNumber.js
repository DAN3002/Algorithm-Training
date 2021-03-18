function countOdd(l,r){
    if(l % 2 == 0 && r % 2 == 0) return (r-l) >> 1;
 
    if(l % 2 == 1 && r % 2 == 0) return ((r-l-1) >> 1) + 1;
 
    return ((r-l) >> 1) + 1;
}