function countZeroDigit(a, b){
    let count = 0;
    for(let i = a; i <= b; i++)
    {
        let str = i + "";
        let size = str.length;
        count += size - str.replace(/0/g, "").length;
    }
    return count;
}
 