function checkDivisible(n){
    let str = n + "";
    let sum = 0;
    let arr = [];
    for(let i = 0; i < str.length; i++)
    {
        let a = parseInt(str.charAt(i));
        arr.push(a);
        sum += a;
    }
    return arr.every(element => sum % element == 0) ? 'YES' : 'NO';
}
 