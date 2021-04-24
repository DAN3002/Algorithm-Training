function withdraw(n){
    let arr  = [];
    arr.push(Math.floor(n/100));
    n %= 100;
    if(n < 50 && n%20 != 0)
    {
        arr[0]--;
        n += 100;
    }
 
    if((n%50)%20 == 0)
    {
        arr.push(Math.floor(n/50));
        arr.push(Math.floor((n%50)/20));
    }
    else {
        arr.push(Math.floor(n/50) - 1);
        arr.push(Math.floor((n%50+50)/20));        
    }
    return arr;
}
 