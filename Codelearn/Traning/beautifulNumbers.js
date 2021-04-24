function beautifulNumbers(n){
    // if(n == 0) return 0;   
    let size =  (n + "").length;
    let count = (size - 1)*9 + 1;
    for(let i = 1; i <= 9; i++)
    {
        let str = (i + "").repeat(size);
        if(parseInt(str) > n) break;
        else count++;
    }
    return count;
}
 