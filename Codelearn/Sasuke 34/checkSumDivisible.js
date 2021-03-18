function checkSumDivisible(n){
    let sum = 0;
    let set = new Set();
    for(let i = 0; i < n.length; i++)
    {
        let a = parseInt(n.charAt(i));
        set.add(a);
        sum += a;
    }
    return Array
    .from(set)
    .every(element => sum % element == 0);
}