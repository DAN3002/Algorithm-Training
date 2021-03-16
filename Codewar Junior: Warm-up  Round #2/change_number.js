function changeNumber(x){
    for(let i = 0; i < 5; i++){
        if(x % 3 == 0) x/=3;
        else x++;
    }
    return x;
}