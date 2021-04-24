function milkingthecow(a){
    let count = 0;
    let sum = 0;
    a.sort((a,b) => b - a);
    for(let i of a)
    {
        sum += Math.max(0, i - count);
        count++;
    }
    return sum;
}
 