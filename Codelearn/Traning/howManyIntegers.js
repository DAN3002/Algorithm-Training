function howManyIntegers(n){
    let count = 0;
    for(let i = 4; i < n; i++)
    {
        let arr = Array.from(i + "");
        if(arr.every(el => "047".includes(el))) count++;
    }
    return count;
}
 