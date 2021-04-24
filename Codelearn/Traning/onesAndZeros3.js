function onesAndZeros3(arr){
    let map = [];
    for(let i = 0; i < arr.length; i++)
    {
        let el = arr[i];
        if(map.length >= 2 && map.slice(-2).every(j => j == el))
        {
            map.pop();
            map.pop();
        } else map.push(el);
    }
    return map.length;
}