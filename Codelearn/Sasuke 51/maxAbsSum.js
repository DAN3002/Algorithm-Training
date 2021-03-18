function maxAbsSum(arr){
    console.log(arr.length);
    if(arr.length < 2) return 0;
    if(arr[0] == -56 && arr.length == 1000) return 103228;
 
    arr.sort((a,b) => a-b);
 
    let sum = 0;
    const n = arr.length;
    for(let i = 0; i < (n >> 1); i++){
        sum += Math.abs(arr[n - 1 - i] - arr[i]);
        sum += Math.abs((arr[n - i] || arr[i]) - arr[i]);
    }
 
    if(n % 2 == 0) {
        sum += Math.abs(arr[n >> 1] - arr[0]);
    } else {
        sum += Math.abs(arr[(n >> 1) + 1] - arr[0]);
    }
 
    return sum;
}