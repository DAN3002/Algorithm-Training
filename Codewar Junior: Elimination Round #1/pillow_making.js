function pillowMaking(arr){
    const [m,n,x,y] = arr;
    return Math.min(Math.floor(x/m), Math.floor(y/n));    
}