function additionSubArray(arr){
    let out = [];
    for(let i = 1; i < arr.length; i++){
        out.push(arr[i] - arr[i-1]);
    }
 
    return check(out);
 
 
}
 
function check(arr){
    if(arr.length <= 2) return false;
    let diss = arr[1] - arr[0];
 
    return arr.every((el,index) => index == 0 || arr[index-1] + diss == el);
}