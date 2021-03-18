function sumOfStones(arr){
    for(let i = arr.length - 2; i >= 0; i--){
        let after = arr[i+1]
        for(let j = 0; j < arr[0].length; j++){
            arr[i][j] += Math.max(after[j-1] || 0, after[j], after[j+1] || 0);
        }
    }
 
    return Math.max(...arr[0]);
}