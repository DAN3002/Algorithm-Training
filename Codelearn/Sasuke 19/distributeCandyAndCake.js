function distributeCandy(man, b, k, n){
    let candy = 0;
    let cake = 0;
    for(let i = 0; i < man.length; i++)
    {
        if(man[i] <= 15)
        {
            if(man[i+1] <= 15 || man[i-1] <= 15) candy += 8;
            else candy += 4;            
        } else {
            if(man[i+1] > 15 || man[i-1] > 15) cake += 1;
            else cake += 2;                 
        }
    }
    let out = (k*candy + b*cake) - n;
 
    return out > 0 ? out : 0;
}
 