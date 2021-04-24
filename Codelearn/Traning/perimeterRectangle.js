function perimeterRectangle(arr){
    if(arr.includes(0)) return -1;
    arr.sort((a,b) => a-b);
    if(arr[0] == arr[1] && arr[2] == arr[3]) return arr.reduce((a,b) => a+b, 0);
    return -1;
}
