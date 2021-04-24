function makeSortedArray(arr){
    let max = arr.length+1;
    for(let i = max-1; i >= 0; i--){
        if(arr[i]+1==max){
            max = arr[i];
        }
    }
    return max-1;
}
