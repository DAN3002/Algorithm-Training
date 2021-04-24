function absLessThanEqual1(arr){
    let max = 0;
    let map = Array.from(new Set(arr));
    for(let i of map)
    {
        max = Math.max(max, arr.filter(el => el == i || el == i+ 1).length);
    }
    return max;
}
 