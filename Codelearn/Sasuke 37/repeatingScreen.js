function repeatingScreen(arr,k,n){
    let index = ((n-1)%arr.length);
    let sum = 0;
    while(k > 0){        
        sum += arr[index];
        index = index == arr.length - 1 ? 0 : index + 1;
        k--;
    }
    return sum;
}
 
// function cal(arr, k){
//     let sum = arr.reduce((a,b) => a+b, 0);
//     let time = Math.floor(k / arr.length);
//     return sum * time + arr.slice(0, (k%arr.length)).reduce((a,b) => a+b,0);
// }