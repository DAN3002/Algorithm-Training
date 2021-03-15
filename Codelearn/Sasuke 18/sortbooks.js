function sortbooks(arr){
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
    // arr = arr.filter(el => el <= length);
 
    // let max = 0;
    // for(let i = 0; i < length; i++)
    // {
    //     if(arr[i] < length && arr[i] > max) max = arr[i];
    // }
    // return 1 + max;
    // console.log(length);
    // let max = Math.max(...arr);
    // if(max > length) return length;
    // return max + 1 + (length - arr.length);
 
}