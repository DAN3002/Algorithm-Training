function multiplicationOfLuckynumber(n){
    let str = [...n.toString()].map(el => parseInt(el));

    if(str.includes(4)) return -1;

    let sum = str[0] * str.slice(-1)[0];

    if((sum - 4) % 10 == 0) return -1;
    return sum;
}
