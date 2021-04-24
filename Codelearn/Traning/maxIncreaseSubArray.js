function maxIncreaseSubArray(arr){
    let f = Array(arr.length).fill(1);
    let max = 1;

    for(let [i, el] of arr.entries()){
        if(el > arr[i - 1]) {
            f[i] = f[i-1] + 1;
            max = Math.max(max, f[i]);
        }
    }

    return max;
}
