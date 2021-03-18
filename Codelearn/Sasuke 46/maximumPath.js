function maximumPath(arr){
    if(arr.length == 0) return 0;
    for(let i = arr.length - 2; i >= 0; i--){
        let after = arr[i+1]
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] += Math.max(after[j], after[j+1] || 0);
        }
    }
 
    return Math.max(...arr[0]);    
}