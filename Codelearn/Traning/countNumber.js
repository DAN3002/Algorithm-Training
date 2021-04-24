function countNumber(n){
    let count = 0;
    for(let i = 1; i <= n; i++)
    {
        let map = Array.from(i + "");
        if((new Set(map)).size == map.length && !map.includes("4")) count++;
    }
    return count;
}
 