function maximizeSum(arr){
    arr = arr.sort((a,b) => a -b);
    let sum = 0;
    let half = Math.floor(arr.length / 2);
    let map = [];
    for(let i = 0; i < half; i++)
    {
        map.push(arr[i]);
        map.push(arr.slice(-(i+1))[0]);
    }
    if(arr.length % 2 != 0) map.push(arr[half]);
    for(let i = 0; i < map.length - 1; i++)
    {
        sum += Math.abs(map[i] - map[i+1]);
    }
    sum += Math.abs(map[0] - map[map.length - 1]);
    return sum;
}
 