function goldRush(arr){
    return arr.length > 1 ? new Set(arr).size > 1 : true;
}
