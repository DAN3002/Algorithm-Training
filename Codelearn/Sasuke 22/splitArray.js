function splitArray(arr){
    if(arr.length % 2 == 0) return false;
    if(arr[0] % 2 == 0) return false;
    if(arr.slice(-1)[0] % 2 == 0) return false;
    let evenCount = arr.filter(el => el % 2 != 0).length;
    if(evenCount == 1) return true;
    if(evenCount == 0) return false;
    return true;
}
 