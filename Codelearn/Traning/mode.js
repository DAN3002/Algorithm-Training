function mode(arr){
    let sum = 0;
    let max = 0;
    for(let i of arr)
    {
        let old = arr.length;
        arr = arr.filter(el => el !== i);
        let count = old - arr.length;
        if(count > max)
        {
            max = count;
            sum = i * count;
        } else if (max == count)
        {
            sum += i * count;
        }
    }
    return sum;
}
 