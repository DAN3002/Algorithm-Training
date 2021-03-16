function countPairs(arr){
    let count = 0;
    arr.sort((a,b) => a-b);
 
    let l = 0, r = arr.length - 1;
 
    while(l < r) {
        if(arr[l] + arr[r] > 0){
            count += (r-l);
            r--;
        } else {
            l++;
        }
    }
 
    return count;
}