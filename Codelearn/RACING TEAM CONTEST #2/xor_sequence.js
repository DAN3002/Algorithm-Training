function xorSequence(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++)
    {
        let a = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            console.log(a ^ arr[j]);
            if((a ^ arr[j]) % 2 == 0) count++;
        }
    }
    return count;
}