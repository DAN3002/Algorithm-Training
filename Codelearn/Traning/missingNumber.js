function missingNumber(arr){
    arr.sort((a,b) => a-b);
    let index = arr.findIndex((el,index) => el != index + 1);
    return index == -1 ? arr.length + 1: index + 1;
}
