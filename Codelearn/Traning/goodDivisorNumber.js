function goodDivisorNumber(n){
    let map = [];

    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            map.push(i);
            if(i*i != n) map.push(n/i);
        }
    }

    map.sort((a,b) => a-b);

    return map.every((el, index) => index == 0 || n % (el - map[index - 1]) == 0);
}
