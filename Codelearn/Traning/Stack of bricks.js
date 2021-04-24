function stackofbricks(arr){
    let length = arr.length;
    arr = arr.sort((a,b) => b-a);
    let count = 0;
    for(i = 0; i < length; i++)
    {
        let el = arr[i];
        for(let j = 0; j < i; j++)
        {
            if(arr[j] < i - j) return count;
        }
        count++;
    }
    return count;
}
 