function stabilityArray(arr){
    return arr.every((el,index) => index == 0 || Math.abs(el - arr[index-1]) <= 5);
}