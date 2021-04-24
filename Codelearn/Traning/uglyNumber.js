function uglyNumber(n){
    let map = [5,3,2];
    for(let i of map)
    {
        while(n % i == 0) n /= i;
    }
    if(n == 0) return false;
    return n == 1;
}